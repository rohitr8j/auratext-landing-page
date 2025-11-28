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
        { error: 'Payment system is not configured' },
        { status: 503 }
      );
    }

    const { orderId } = await request.json();

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const client = getPayPalClient();

    // Capture the order
    const captureRequest = new paypal.orders.OrdersCaptureRequest(orderId);
    captureRequest.requestBody({});

    const capture = await client.execute(captureRequest);

    if (capture.statusCode === 201 && capture.result) {
      return NextResponse.json({
        verified: true,
        orderId: capture.result.id,
        paymentId: capture.result.purchase_units?.[0]?.payments?.captures?.[0]?.id,
        amount: capture.result.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.value,
        currency: capture.result.purchase_units?.[0]?.payments?.captures?.[0]?.amount?.currency_code,
      });
    } else {
      throw new Error('Failed to capture payment');
    }
  } catch (error: any) {
    console.error('PayPal capture error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to capture payment', verified: false },
      { status: 500 }
    );
  }
}

