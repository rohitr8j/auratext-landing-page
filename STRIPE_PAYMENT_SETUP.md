# Stripe Payment Integration Setup Guide

This guide will help you set up Stripe payments for your AuraText landing page.

## Prerequisites

1. A Stripe account (sign up at https://stripe.com)
2. Access to your Stripe Dashboard

### For Users in India 🇮🇳

Stripe fully supports India! Here's what you need to know:

- **Currency**: You can use INR (Indian Rupees) or USD
- **Payment Methods**: Stripe supports cards, UPI, netbanking, and wallets in India
- **Account Setup**: You'll need:
  - Indian business registration (GST number if applicable)
  - Indian bank account for payouts
  - PAN card for verification
- **Transaction Fees**: 
  - Cards: 2% + ₹2 per transaction (domestic cards)
  - UPI: 2% + ₹2 per transaction
  - International cards: 3% + ₹2 per transaction
- **Payouts**: Funds are transferred to your Indian bank account (usually 2-7 business days)

## Step 1: Get Your Stripe API Keys

### For Live Mode (Production - Accepting Real Payments)

1. Log in to your [Stripe Dashboard](https://dashboard.stripe.com)
2. **Important**: Make sure you're in **Live mode** (toggle in the top right of the dashboard)
3. Complete Stripe account verification (if not done already):
   - Add business information
   - Verify your identity
   - Add bank account for payouts
   
   **For India 🇮🇳:**
   - Business registration documents (if applicable)
   - PAN card for identity verification
   - GST number (if your business is GST registered)
   - Indian bank account details (account number, IFSC code)
   - Business address proof
   - Bank statement (may be required)

4. Go to **Developers** > **API keys**
5. Copy your **Live mode** keys:
   - **Secret key** (starts with `sk_live_`)
   - **Publishable key** (starts with `pk_live_`) - not needed for this setup but good to have

### For Test Mode (Development - Testing Only)

1. Toggle to **Test mode** in Stripe Dashboard
2. Go to **Developers** > **API keys**
3. Copy your **Test mode** keys (starts with `sk_test_` and `pk_test_`)

## Step 2: Create Products and Prices in Stripe

### For Live Mode Setup:

1. **Make sure you're in Live mode** (toggle in top right of Stripe Dashboard)
2. Go to **Products** in your Stripe Dashboard
3. Create 3 products:
   - **Basic Plan** - $9/month or $90/year (or ₹750/month / ₹7,500/year in INR)
   - **Pro Plan** - $19/month or $190/year (or ₹1,600/month / ₹16,000/year in INR)
   - **Enterprise Plan** - $99/month or $990/year (or ₹8,250/month / ₹82,500/year in INR)

4. For each product:
   - Click on the product
   - Click **"Add another price"** or **"Pricing"**
   - Create **Monthly subscription**:
     - Type: Recurring
     - Billing period: Monthly
     - Price: Enter the amount (e.g., $9.00 or ₹750.00)
     - Currency: **USD** or **INR** (choose based on your target market)
   - Create **Annual subscription**:
     - Type: Recurring
     - Billing period: Yearly
     - Price: Enter the amount (e.g., $90.00 or ₹7,500.00)
     - Currency: **USD** or **INR** (must match monthly currency)

💡 **For India**: If targeting Indian customers, use **INR** currency. You'll need to update the price display in `src/components/Pricing/index.tsx` to show ₹ instead of $.

5. **Copy the Price IDs** for each price (they start with `price_`)
   - You'll need 6 Price IDs total (3 plans × 2 billing periods)

⚠️ **Important**: Live mode and Test mode have separate products/prices. Make sure you're creating these in **Live mode** if you want to accept real payments.

## Step 3: Set Up Environment Variables

### For Live Mode (Production):

Create a `.env.local` file in the root of your project (if it doesn't exist):

```env
# Stripe Live Mode API Keys (REAL PAYMENTS)
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxx  # Your Live Secret Key from Stripe Dashboard
NEXT_PUBLIC_BASE_URL=https://auratxt.com  # Your production URL

# Stripe Live Mode Price IDs (from Live mode products)
NEXT_PUBLIC_STRIPE_PRICE_BASIC_MONTHLY=price_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_BASIC_ANNUAL=price_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_PRO_MONTHLY=price_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_PRO_ANNUAL=price_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_MONTHLY=price_xxxxxxxxxxxxx
NEXT_PUBLIC_STRIPE_PRICE_ENTERPRISE_ANNUAL=price_xxxxxxxxxxxxx
```

### For Production Deployment (Vercel, Netlify, etc.):

1. Go to your hosting platform's dashboard (e.g., Vercel Dashboard)
2. Navigate to your project settings > Environment Variables
3. Add all the environment variables from above:
   - `STRIPE_SECRET_KEY` (use your **live** key: `sk_live_...`)
   - `NEXT_PUBLIC_BASE_URL` (your production URL: `https://auratxt.com`)
   - All 6 Price ID variables (from **Live mode** products)
4. Make sure to set them for **Production** environment
5. Redeploy your application

### For Test Mode (Development):

```env
# Stripe Test Mode API Keys (TESTING ONLY)
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx  # Your Test Secret Key
NEXT_PUBLIC_BASE_URL=http://localhost:3000  # Local development URL

# Stripe Test Mode Price IDs (from Test mode products)
# ... (same structure but with test mode Price IDs)
```

## Step 4: Test the Integration

### Testing in Live Mode (⚠️ Real Payments):

1. **Before testing with live mode**, make sure:
   - Your Stripe account is fully verified
   - You've completed business information
   - Bank account is added for payouts
   - You understand that real charges will occur

2. Start your development server:
   ```bash
   npm run dev
   ```

3. Navigate to the Pricing section on your landing page
4. Click "Choose [Plan]" button
5. You'll be redirected to Stripe Checkout
6. **Use a real credit/debit card** - real charges will occur!

### Testing in Test Mode (Recommended First):

1. Switch to Test mode in Stripe Dashboard
2. Use test card: `4242 4242 4242 4242`
   - Any future expiry date (e.g., 12/25)
   - Any 3-digit CVC (e.g., 123)
   - Any ZIP code (e.g., 12345)
3. No real charges will occur

## Step 5: Configure Webhooks (Optional but Recommended)

Webhooks allow Stripe to notify your application about payment events.

1. In Stripe Dashboard, go to **Developers** > **Webhooks**
2. Click **Add endpoint**
3. Set endpoint URL: `https://yourdomain.com/api/webhooks/stripe`
4. Select events to listen to:
   - `checkout.session.completed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copy the **Webhook signing secret** (starts with `whsec_`)

Add to your `.env.local`:
```env
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx
```

## Current Pricing Plans

The following plans are configured in the Pricing component:

- **Basic**: $9/month or $90/year
- **Pro**: $19/month or $190/year
- **Enterprise**: $99/month or $990/year

### For India (INR Pricing):

If you want to use Indian Rupees, you can set:
- **Basic**: ₹750/month or ₹7,500/year
- **Pro**: ₹1,600/month or ₹16,000/year
- **Enterprise**: ₹8,250/month or ₹82,500/year

To change these prices:
1. Update the prices in your Stripe Dashboard (create new prices with INR currency)
2. Update the price display in `src/components/Pricing/index.tsx`:
   - Change `"$9"` to `"₹750"` (or your preferred INR amount)
   - Change `"$90"` to `"₹7,500"` (or your preferred INR amount)
   - Repeat for all plans
3. Update the Price IDs in your environment variables (use the INR price IDs from Stripe)

## Troubleshooting

### "Payment is not configured" Error
- Make sure all Price IDs are set in your `.env.local` file
- Restart your development server after adding environment variables
- Verify the Price IDs exist in your Stripe Dashboard

### "Failed to create checkout session" Error
- Check that `STRIPE_SECRET_KEY` is set correctly
- Verify you're using the correct key (test vs live mode)
- Check the browser console and server logs for detailed error messages

### Checkout Redirect Not Working
- Verify `NEXT_PUBLIC_BASE_URL` is set correctly
- For local development, use `http://localhost:3000`
- For production, use your full domain with `https://`

## Security Notes

⚠️ **Critical Security Reminders:**

1. **Never commit `.env.local` to version control** - it's already in `.gitignore`
2. **Never expose your Secret Key** - it should only be in server-side code
3. **Never share your Live Secret Key** - treat it like a password
4. **Use Test Mode** during development to avoid accidental charges
5. **Switch to Live Mode** only when:
   - Your site is deployed to production
   - You've tested everything in test mode
   - You're ready to accept real payments
6. **Keep your Secret Keys secure** - rotate them immediately if exposed
7. **Enable 2FA** on your Stripe account for extra security

## Live Mode Checklist

Before going live, make sure:

- [ ] Stripe account is fully verified
- [ ] Business information is complete
- [ ] Bank account is added for payouts
- [ ] All products and prices are created in **Live mode**
- [ ] All 6 Price IDs are copied from **Live mode**
- [ ] Environment variables use `sk_live_` keys (not `sk_test_`)
- [ ] `NEXT_PUBLIC_BASE_URL` is set to your production domain
- [ ] You've tested the flow in test mode first
- [ ] Your site is deployed to production
- [ ] You understand Stripe's transaction fees

### India-Specific Checklist 🇮🇳:

- [ ] PAN card is verified
- [ ] GST number is added (if applicable)
- [ ] Indian bank account is verified with IFSC code
- [ ] Business address proof is submitted
- [ ] Currency is set to INR (if targeting Indian customers)
- [ ] Price display shows ₹ symbol (update `src/components/Pricing/index.tsx`)
- [ ] You understand Indian transaction fees (2% + ₹2 for domestic cards/UPI)

## Next Steps

After setting up payments, you may want to:

1. Set up user authentication to track subscriptions
2. Implement subscription management (cancel, upgrade, downgrade)
3. Add webhook handlers to sync subscription status
4. Create a customer portal for subscription management
5. Add email notifications for successful payments

## Support

For Stripe-specific issues, check:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com)

For integration issues, check the code comments in:
- `src/app/api/checkout/route.ts`
- `src/components/Pricing/index.tsx`

