# PayPal Payment Integration Setup Guide

This guide will help you set up PayPal payments for your AuraText landing page.

## Why PayPal?

PayPal is excellent for international customers:
- ✅ **Global reach** - Works in 200+ countries
- ✅ **Trusted brand** - Widely recognized worldwide
- ✅ **Quick setup** - Usually approved within hours
- ✅ **Multiple payment methods** - Cards, PayPal balance, bank transfers
- ✅ **Good for international** - Better than Razorpay for non-Indian customers

## Prerequisites

1. A PayPal Business account (sign up at https://www.paypal.com/business)
2. Business information and verification documents

## Step 1: Create PayPal Business Account

1. Go to https://www.paypal.com/business
2. Click **"Sign Up"** for a Business account
3. Fill in your business details:
   - Business name
   - Business type
   - Business address
   - Tax ID (if applicable)
   - Bank account details (for payouts)

## Step 2: Get Your API Credentials

1. Log in to your [PayPal Developer Dashboard](https://developer.paypal.com/dashboard)
2. Go to **My Apps & Credentials**
3. Create a new app or use the default app
4. You'll see:
   - **Client ID** (starts with `Ae...` for sandbox, `AX...` for live)
   - **Client Secret** (click "Show" to reveal it)

⚠️ **Important**: 
- Use **Sandbox** credentials for testing
- Use **Live** credentials for production
- Never share your Client Secret publicly

## Step 3: Activate Your Account

1. Complete business verification:
   - Verify your email
   - Add business information
   - Link bank account (for payouts)
   - Complete identity verification if required
2. Wait for approval (usually within 24 hours)

## Step 4: Set Up Environment Variables

Create a `.env.local` file in the root of your project:

```env
# PayPal API Credentials
PAYPAL_CLIENT_ID=Ae...  # Your Client ID from PayPal Developer Dashboard
PAYPAL_CLIENT_SECRET=...  # Your Client Secret from PayPal Developer Dashboard
PAYPAL_ENVIRONMENT=sandbox  # Use 'sandbox' for testing, 'production' for live
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # Your site URL (change to https://auratxt.com for production)
```

### For Production Deployment (Vercel, Netlify, etc.):

1. Go to your hosting platform's dashboard
2. Navigate to **Environment Variables**
3. Add:
   - `PAYPAL_CLIENT_ID` (use your **live** Client ID)
   - `PAYPAL_CLIENT_SECRET` (use your **live** Client Secret)
   - `PAYPAL_ENVIRONMENT` (set to `production`)
   - `NEXT_PUBLIC_BASE_URL` (your production URL: `https://auratxt.com`)
4. Make sure to set them for **Production** environment
5. Redeploy your application

## Step 5: Test the Integration

### Testing in Sandbox Mode:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Pricing section
3. Select **"PayPal ($)"** as payment method
4. Click "Choose [Plan]" button
5. You'll be redirected to PayPal checkout
6. Use PayPal sandbox test accounts:
   - **Personal Account**: Use sandbox personal account from PayPal Developer Dashboard
   - **Business Account**: Use sandbox business account
   - Or use test card: `4032034814051234` (any future expiry, any CVV)

### Testing in Live Mode:

1. Switch `PAYPAL_ENVIRONMENT` to `production`
2. Use real PayPal accounts or credit cards
3. Real charges will occur!

## Current Pricing Plans (USD for PayPal)

The following plans are configured for PayPal:

- **Basic**: $9/month or $90/year
- **Pro**: $19/month or $190/year
- **Enterprise**: $99/month or $990/year

To change these prices:
1. Update the prices in `src/components/Pricing/index.tsx` (in the `getPriceAmount` function for PayPal)
2. Update the display prices in the `plans` array

## Payment Methods Supported

PayPal supports:
- ✅ Credit/Debit Cards (Visa, Mastercard, Amex, Discover)
- ✅ PayPal Balance
- ✅ Bank transfers (in some countries)
- ✅ PayPal Credit (in some countries)

## Transaction Fees

- **Domestic (US)**: 2.9% + $0.30 per transaction
- **International**: 4.4% + fixed fee (varies by country)
- **Currency conversion**: Additional fees may apply

## Payouts

- Funds are transferred to your linked bank account
- Payout schedule: Usually 1-3 business days
- Minimum payout: Varies by country

## Security Notes

⚠️ **Critical Security Reminders:**

1. **Never commit `.env.local` to version control** - it's already in `.gitignore`
2. **Never expose your Client Secret** - it should only be in server-side code
3. **Use Sandbox Mode** during development
4. **Switch to Production Mode** only when:
   - Your account is fully verified
   - You've tested everything in sandbox mode
   - You're ready to accept real payments
5. **Keep your Client Secret secure** - rotate it immediately if exposed
6. **Enable webhook verification** for production

## Webhooks (Recommended for Production)

Webhooks allow PayPal to notify your application about payment events.

1. In PayPal Developer Dashboard, go to your app
2. Click **"Add Webhook"**
3. Set endpoint URL: `https://yourdomain.com/api/webhooks/paypal`
4. Select events:
   - `PAYMENT.CAPTURE.COMPLETED`
   - `PAYMENT.CAPTURE.DENIED`
   - `PAYMENT.CAPTURE.REFUNDED`
5. Copy the **Webhook ID**

## Troubleshooting

### "Payment system is not configured" Error
- Make sure `PAYPAL_CLIENT_ID` and `PAYPAL_CLIENT_SECRET` are set
- Restart your development server after adding environment variables
- Verify the credentials exist in your PayPal Developer Dashboard

### "Failed to create payment order" Error
- Check that your PayPal account is activated
- Verify you're using the correct credentials (sandbox vs live)
- Check the browser console and server logs for detailed error messages

### PayPal Redirect Not Working
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- For local development, use `http://localhost:3000`
- For production, use your full domain with `https://`
- Check that return URLs are whitelisted in PayPal app settings

## Comparison: PayPal vs Razorpay

| Feature | PayPal | Razorpay |
|---------|--------|----------|
| **Global Reach** | ✅ 200+ countries | ❌ Primarily India |
| **India Support** | ✅ Good | ✅ Excellent |
| **UPI Support** | ❌ No | ✅ Yes |
| **Fees (Domestic)** | 2.9% + $0.30 | 2% + ₹2 |
| **Setup Time** | Hours | 1-2 days |
| **Best For** | International customers | Indian customers |

## Payment Method Selection

Your pricing page now supports both:
- **Razorpay (₹)** - For Indian customers (INR pricing)
- **PayPal ($)** - For international customers (USD pricing)

Customers can switch between payment methods using the toggle in the pricing section.

## Next Steps

After setting up payments, you may want to:

1. Set up webhooks for payment notifications
2. Implement subscription management
3. Add email notifications for successful payments
4. Create a customer portal for subscription management
5. Set up recurring payments (subscriptions)

## Support

For PayPal-specific issues:
- [PayPal Developer Documentation](https://developer.paypal.com/docs/)
- [PayPal Support](https://www.paypal.com/support/)
- [PayPal Developer Dashboard](https://developer.paypal.com/dashboard)

For integration issues, check the code comments in:
- `src/app/api/paypal-checkout/route.ts`
- `src/app/api/paypal-capture/route.ts`
- `src/components/Pricing/index.tsx`

---

**Congratulations!** 🎉 You now have both Razorpay and PayPal integrated. Customers can choose their preferred payment method!

