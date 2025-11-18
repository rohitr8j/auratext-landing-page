# Stripe Setup Guide for India 🇮🇳

This is a quick reference guide for setting up Stripe payments in India.

## Quick Start for India

### 1. Account Verification Requirements

When setting up your Stripe account in India, you'll need:

- **PAN Card** (Personal Account Number) - mandatory
- **Business Registration** (if running a business)
- **GST Number** (if your business is GST registered)
- **Indian Bank Account** with:
  - Account number
  - IFSC code
  - Bank name and branch
- **Business Address Proof** (utility bill, rent agreement, etc.)
- **Bank Statement** (may be required)

### 2. Currency Options

You can choose to accept payments in:
- **INR (Indian Rupees)** - Recommended for Indian customers
- **USD (US Dollars)** - If targeting international customers

**Note**: You can only use one currency per Stripe account. If you want both, you'll need separate Stripe accounts.

### 3. Payment Methods Available in India

Stripe supports these payment methods in India:
- ✅ Credit/Debit Cards (Visa, Mastercard, RuPay)
- ✅ UPI (Unified Payments Interface)
- ✅ Netbanking (major Indian banks)
- ✅ Wallets (Paytm, PhonePe, etc.)

### 4. Transaction Fees (India)

- **Domestic Cards**: 2% + ₹2 per transaction
- **UPI**: 2% + ₹2 per transaction
- **Netbanking**: 2% + ₹2 per transaction
- **International Cards**: 3% + ₹2 per transaction

### 5. Payouts

- Funds are transferred to your Indian bank account
- Payout schedule: Usually 2-7 business days
- Minimum payout: ₹100

### 6. Updating Prices to INR

If you want to display prices in Indian Rupees:

1. **In Stripe Dashboard:**
   - Create products with INR currency
   - Set prices in INR (e.g., ₹750, ₹1,600, ₹8,250)

2. **In Your Code:**
   - Open `src/components/Pricing/index.tsx`
   - Find the `plans` array (around line 101)
   - Update price strings:
     ```typescript
     // Change from:
     price: currentBilling === "monthly" ? "$9" : "$90"
     
     // To:
     price: currentBilling === "monthly" ? "₹750" : "₹7,500"
     ```
   - Repeat for all three plans

3. **Suggested INR Pricing:**
   - Basic: ₹750/month or ₹7,500/year
   - Pro: ₹1,600/month or ₹16,000/year
   - Enterprise: ₹8,250/month or ₹82,500/year

### 7. Tax Compliance (GST)

If your business is GST registered:
- Stripe can handle GST automatically
- You'll need to provide your GST number during account setup
- Invoices will include GST details

### 8. Common Issues in India

**Issue**: Account verification taking time
- **Solution**: Make sure all documents are clear and legible
- Stripe typically verifies within 1-3 business days

**Issue**: Bank account not verifying
- **Solution**: Double-check IFSC code and account number
- Ensure the account is in your name or business name

**Issue**: UPI payments not showing
- **Solution**: Make sure you're in Live mode (UPI not available in Test mode)
- UPI is automatically enabled for Indian accounts

### 9. Support

- **Stripe India Support**: Available in English and Hindi
- **Documentation**: https://stripe.com/docs/payments/payment-methods/in
- **Help Center**: https://support.stripe.com

### 10. Testing in India

For testing (Test mode):
- Use test card: `4242 4242 4242 4242`
- UPI is NOT available in test mode
- Only card payments can be tested

For production (Live mode):
- All payment methods work
- Real charges will occur
- Funds will be transferred to your bank account

---

**Need Help?** Check the main `STRIPE_PAYMENT_SETUP.md` file for detailed setup instructions.

