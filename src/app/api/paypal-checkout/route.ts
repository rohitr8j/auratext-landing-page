import { NextRequest, NextResponse } from 'next/server';
import paypal from '@paypal/checkout-server-sdk';

const getPayPalClient = () => {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET;
  const environment = process.env.PAYPAL_ENVIRONMENT || 'sandbox';

  if (!clientId || !clientSecret) {
    throw new Error('PayPal credentials are not set in environment variables');
  }

  const environmentConfig = environment === 'production'
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret);

  return new paypal.core.PayPalHttpClient(environmentConfig);
};

export async function POST(request: NextRequest) {
  try {
    if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'Payment system is not configured. Please contact support.' },
        { status: 503 }
      );
    }

    const client = getPayPalClient();
    const { amount, planName, billing, currency = 'USD' } = await request.json();

    if (!amount) {
      return NextResponse.json(
        { error: 'Amount is required' },
        { status: 400 }
      );
    }

    // Create PayPal order
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: currency,
            value: amount.toFixed(2),
          },
          description: `${planName} Plan - ${billing === "monthly" ? "Monthly" : "Annual"} Subscription`,
          custom_id: `${planName}_${billing}_${Date.now()}`,
        },
      ],
      application_context: {
        brand_name: 'AuraText',
        landing_page: 'BILLING',
        user_action: 'PAY_NOW',
        return_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/success?provider=paypal`,
        cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/payment/cancel`,
      },
    });

    const order = await client.execute(request);

    if (order.statusCode === 201 && order.result) {
      // Find approval URL
      const approvalUrl = order.result.links?.find(
        (link: any) => link.rel === 'approve'
      )?.href;

      return NextResponse.json({
        orderId: order.result.id,
        approvalUrl: approvalUrl,
        amount: amount,
        currency: currency,
      });
    } else {
      throw new Error('Failed to create PayPal order');
    }
  } catch (error: any) {
    console.error('PayPal checkout error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create payment order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('order_id');

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'Payment system is not configured' },
        { status: 503 }
      );
    }

    const client = getPayPalClient();
    const request = new paypal.orders.OrdersGetRequest(orderId);
    const order = await client.execute(request);

    if (order.statusCode === 200 && order.result) {
      return NextResponse.json({ order: order.result });
    } else {
      throw new Error('Failed to retrieve order');
    }
  } catch (error: any) {
    console.error('PayPal order retrieval error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to retrieve order' },
      { status: 500 }
    );
  }
}

