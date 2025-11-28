# Razorpay Payment Integration Setup Guide

This guide will help you set up Razorpay payments for your AuraText landing page.

## Why Razorpay?

Razorpay is the best payment gateway for Indian businesses:
- ✅ **Fast approval** - Usually approved within 24-48 hours
- ✅ **Great for India** - Excellent UPI, wallet, and netbanking support
- ✅ **Lower fees** - 2% + ₹2 per transaction (domestic)
- ✅ **Easy integration** - Simple API and good documentation
- ✅ **No invite required** - Unlike Stripe in India

## Prerequisites

1. A Razorpay account (sign up at https://razorpay.com)
2. Business registration documents (if applicable)
3. Indian bank account for payouts

## Step 1: Create Razorpay Account

1. Go to https://razorpay.com and click **"Sign Up"**
2. Choose **"Business Account"**
3. Fill in your business details:
   - Business name
   - Business type
   - PAN card number
   - Business address
   - Bank account details (IFSC code, account number)

## Step 2: Get Your API Keys

1. Log in to your [Razorpay Dashboard](https://dashboard.razorpay.com)
2. Go to **Settings** > **API Keys**
3. You'll see two keys:
   - **Key ID** (starts with `rzp_test_` for test mode, `rzp_live_` for live mode)
   - **Key Secret** (click "Reveal" to see it)

⚠️ **Important**: 
- Use **Test mode** keys for development
- Use **Live mode** keys for production
- Never share your Key Secret publicly

## Step 3: Activate Your Account

1. Complete KYC (Know Your Customer) verification:
   - Upload business registration documents
   - Verify bank account
   - Complete identity verification
2. Wait for approval (usually 24-48 hours)

## Step 4: Set Up Environment Variables

Create a `.env.local` file in the root of your project:

```env
# Razorpay API Keys
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx  # Your Key ID from Razorpay Dashboard
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxx  # Your Key Secret from Razorpay Dashboard
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # Your site URL (change to https://auratxt.com for production)
```

### For Production Deployment (Vercel, Netlify, etc.):

1. Go to your hosting platform's dashboard
2. Navigate to **Environment Variables**
3. Add:
   - `RAZORPAY_KEY_ID` (use your **live** key: `rzp_live_...`)
   - `RAZORPAY_KEY_SECRET` (use your **live** secret)
   - `NEXT_PUBLIC_BASE_URL` (your production URL: `https://auratxt.com`)
4. Make sure to set them for **Production** environment
5. Redeploy your application

## Step 5: Test the Integration

### Testing in Test Mode:

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the Pricing section
3. Click "Choose [Plan]" button
4. Razorpay checkout modal will open
5. Use Razorpay test cards:
   - **Success**: `4111 1111 1111 1111`
   - **Failure**: `4000 0000 0000 0002`
   - Any future expiry date (e.g., 12/25)
   - Any CVV (e.g., 123)
   - Any name

### Testing UPI in Test Mode:

- Use test UPI ID: `success@razorpay`
- Or use any UPI app with test mode enabled

## Current Pricing Plans (INR)

The following plans are configured:

- **Basic**: ₹750/month or ₹7,500/year
- **Pro**: ₹1,600/month or ₹16,000/year
- **Enterprise**: ₹8,250/month or ₹82,500/year

To change these prices:
1. Update the prices in `src/components/Pricing/index.tsx` (in the `getPriceAmount` function)
2. Update the display prices in the `plans` array

## Payment Methods Supported

Razorpay supports:
- ✅ Credit/Debit Cards (Visa, Mastercard, RuPay, Amex)
- ✅ UPI (all UPI apps)
- ✅ Netbanking (major Indian banks)
- ✅ Wallets (Paytm, PhonePe, Freecharge, etc.)
- ✅ EMI options

## Transaction Fees

- **Domestic Cards**: 2% + ₹2 per transaction
- **UPI**: 2% + ₹2 per transaction
- **Netbanking**: 2% + ₹2 per transaction
- **International Cards**: 3% + ₹2 per transaction
- **EMI**: Additional charges may apply

## Payouts

- Funds are transferred to your Indian bank account
- Payout schedule: T+2 (2 business days after transaction)
- Minimum payout: ₹100

## Security Notes

⚠️ **Critical Security Reminders:**

1. **Never commit `.env.local` to version control** - it's already in `.gitignore`
2. **Never expose your Key Secret** - it should only be in server-side code
3. **Use Test Mode** during development
4. **Switch to Live Mode** only when:
   - Your account is fully activated
   - You've tested everything in test mode
   - You're ready to accept real payments
5. **Keep your Key Secret secure** - rotate it immediately if exposed
6. **Enable webhook verification** for production

## Webhooks (Recommended for Production)

Webhooks allow Razorpay to notify your application about payment events.

1. In Razorpay Dashboard, go to **Settings** > **Webhooks**
2. Click **"Add New Webhook"**
3. Set endpoint URL: `https://yourdomain.com/api/webhooks/razorpay`
4. Select events:
   - `payment.captured`
   - `payment.failed`
   - `order.paid`
5. Copy the **Webhook Secret**

Add to your `.env.local`:
```env
RAZORPAY_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

## Troubleshooting

### "Payment system is not configured" Error
- Make sure `RAZORPAY_KEY_ID` and `RAZORPAY_KEY_SECRET` are set
- Restart your development server after adding environment variables
- Verify the keys exist in your Razorpay Dashboard

### "Failed to create payment order" Error
- Check that your Razorpay account is activated
- Verify you're using the correct keys (test vs live mode)
- Check the browser console and server logs for detailed error messages

### Payment Modal Not Opening
- Make sure Razorpay script is loaded (check browser console)
- Verify `RAZORPAY_KEY_ID` is set correctly
- Check for JavaScript errors in the browser console

### Payment Verification Failed
- Make sure `RAZORPAY_KEY_SECRET` is set correctly
- Verify the signature is being generated correctly
- Check server logs for verification errors

## Comparison: Razorpay vs Stripe

| Feature | Razorpay | Stripe |
|---------|----------|--------|
| **India Approval** | ✅ Fast (24-48 hours) | ❌ Invite-only |
| **UPI Support** | ✅ Excellent | ✅ Good |
| **Fees (Domestic)** | 2% + ₹2 | 2% + ₹2 |
| **International** | Limited | ✅ Excellent |
| **Setup Time** | 1-2 days | Weeks (if approved) |
| **Best For** | Indian businesses | Global businesses |

## Next Steps

After setting up payments, you may want to:

1. Set up webhooks for payment notifications
2. Implement subscription management
3. Add email notifications for successful payments
4. Create a customer portal for subscription management
5. Set up recurring payments (subscriptions)

## Support

For Razorpay-specific issues:
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Razorpay Support](https://razorpay.com/support/)
- [Razorpay Dashboard](https://dashboard.razorpay.com)

For integration issues, check the code comments in:
- `src/app/api/razorpay-checkout/route.ts`
- `src/app/api/razorpay-verify/route.ts`
- `src/components/Pricing/index.tsx`

---

**Congratulations!** 🎉 You're now set up with Razorpay, which is perfect for Indian businesses. The integration is ready to accept payments once you add your API keys!

