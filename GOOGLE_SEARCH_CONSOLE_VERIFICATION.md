# Google Search Console Verification

## Domain: auratxt.com

### DNS Verification Record

**Record Type:** TXT  
**Host/Name:** @ (or leave blank for root domain)  
**Value/Content:** 
```
google-site-verification=9wcJ7X7NoObj69XfK5BVq8vkUGoiRpLUEt3Z1RaH_ac
```

### Steps to Add DNS Record

1. **Log in to your domain registrar** (where you purchased auratxt.com)
   - Common providers: GoDaddy, Namecheap, Google Domains, Cloudflare, etc.

2. **Navigate to DNS Management**
   - Look for "DNS Settings", "DNS Management", or "Advanced DNS"

3. **Add a new TXT record:**
   - **Type:** TXT
   - **Name/Host:** @ (or leave blank/use root domain)
   - **Value/Content:** `google-site-verification=9wcJ7X7NoObj69XfK5BVq8vkUGoiRpLUEt3Z1RaH_ac`
   - **TTL:** 3600 (or default)

4. **Save the record**

5. **Wait for DNS propagation** (can take a few minutes to 48 hours, but usually within an hour)

6. **Verify in Google Search Console**
   - Go back to Google Search Console
   - Click "Verify" button
   - If it fails immediately, wait a few hours and try again

### Provider-Specific Instructions

#### GoDaddy
- Go to DNS Management
- Click "Add" under Records
- Select Type: TXT
- Name: @
- Value: `google-site-verification=9wcJ7X7NoObj69XfK5BVq8vkUGoiRpLUEt3Z1RaH_ac`
- TTL: 600 (default)

#### Namecheap
- Go to Advanced DNS tab
- Click "Add New Record"
- Type: TXT Record
- Host: @
- Value: `google-site-verification=9wcJ7X7NoObj69XfK5BVq8vkUGoiRpLUEt3Z1RaH_ac`
- TTL: Automatic

#### Cloudflare
- Go to DNS section
- Click "Add record"
- Type: TXT
- Name: @
- Content: `google-site-verification=9wcJ7X7NoObj69XfK5BVq8vkUGoiRpLUEt3Z1RaH_ac`
- Proxy status: DNS only (gray cloud)

### Verification Checklist

- [ ] TXT record added to DNS
- [ ] Record saved successfully
- [ ] Waited at least 15 minutes (or longer if needed)
- [ ] Clicked "Verify" in Google Search Console
- [ ] Verification successful

### Notes

✅ **Domain Updated:** 
- Your codebase has been updated to use `auratxt.com` to match your domain verification

### Domain Configuration

Your site is accessible at both:
- `https://auratxt.com/` (primary/canonical)
- `https://www.auratxt.com/` (redirects to non-www)

The codebase is configured to:
- Use `auratxt.com` as the canonical domain (non-www)
- Redirect `www.auratxt.com` to `auratxt.com` via 301 redirect
- All canonical URLs point to `auratxt.com`

### After Verification

Once verified in Google Search Console, you can:
- Submit your sitemap (`https://auratxt.com/sitemap.xml`)
- Google will automatically index both www and non-www versions
- Monitor search performance
- View indexing status
- Check for crawl errors
- See search analytics

**Note:** Since you verified the domain property (`auratxt.com`), Google Search Console will track both www and non-www versions automatically.

