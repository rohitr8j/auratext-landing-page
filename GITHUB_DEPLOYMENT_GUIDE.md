# AuraText Landing Page - GitHub Hosting Guide

## 🚀 **Deploying to GitHub Pages**

### **Step 1: Prepare Your Repository**

1. **Initialize Git** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: AuraText landing page"
```

2. **Create GitHub Repository**:
   - Go to GitHub.com
   - Click "New Repository"
   - Name it: `auratext-landing-page`
   - Make it public (required for GitHub Pages)
   - Don't initialize with README (you already have files)

3. **Connect Local to GitHub**:
```bash
git remote add origin https://github.com/Y4shr4j/auratext-landing-page.git
git branch -M main
git push -u origin main
```

### **Step 2: Configure Next.js for Static Export**

Since GitHub Pages serves static files, we need to configure Next.js for static export.

1. **Update `next.config.js`**:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Disable server-side features for static export
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
```

2. **Update `package.json` scripts**:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy": "npm run build && touch out/.nojekyll && git add out/ && git commit -m 'Deploy' && git subtree push --prefix out origin gh-pages"
  }
}
```

### **Step 3: Deploy to GitHub Pages**

#### **Method 1: GitHub Actions (Recommended)**

1. **Create `.github/workflows/deploy.yml`**:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./out
```

2. **Enable GitHub Pages**:
   - Go to your repository Settings
   - Scroll to "Pages" section
   - Source: "GitHub Actions"
   - Save

#### **Method 2: Manual Deploy**

1. **Build and Export**:
```bash
npm run build
```

2. **Create gh-pages branch**:
```bash
git checkout --orphan gh-pages
git rm -rf .
cp -r out/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

3. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Source: "Deploy from a branch"
   - Branch: "gh-pages"
   - Save

### **Step 4: File Management for Production**

Since GitHub Pages is static, you'll need to handle file uploads differently:

#### **Option 1: External File Hosting**
- Upload files to services like:
  - **AWS S3** (with CloudFront CDN)
  - **Google Cloud Storage**
  - **Firebase Storage**
  - **Vercel Blob**
  - **GitHub Releases** (for direct downloads)

#### **Option 2: GitHub Releases**
1. **Create GitHub Release**:
   - Go to your repository
   - Click "Releases" > "Create a new release"
   - Upload your `.exe` and `.zip` files
   - Tag version (e.g., `v1.0.6`)

2. **Update Download API**:
```javascript
// In your download API, redirect to GitHub releases
const GITHUB_RELEASES_URL = 'https://github.com/Y4shr4j/auratext-releases/releases/latest';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');
  
  if (type === 'main') {
    return NextResponse.redirect(`${GITHUB_RELEASES_URL}/download/AuraText-Setup-1.0.3.exe`);
  } else if (type === 'extension') {
    return NextResponse.redirect(`${GITHUB_RELEASES_URL}/download/AuraText-Extension.zip`);
  }
}
```

### **Step 5: Custom Domain (Optional)**

1. **Add CNAME file**:
```bash
echo "auratext.app" > public/CNAME
```

2. **Configure DNS**:
   - Add CNAME record: `www` → `YOUR_USERNAME.github.io`
   - Add A records for root domain:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### **Step 6: Environment Variables**

For production, set these in GitHub repository settings:

1. **Go to Settings > Secrets and variables > Actions**
2. **Add repository secrets**:
   - `GA_MEASUREMENT_ID`: Your Google Analytics ID
   - `NEXT_PUBLIC_SITE_URL`: Your domain URL

### **Step 7: Update Analytics**

Replace `GA_MEASUREMENT_ID` in your layout with the actual ID:

```javascript
// In src/app/layout.tsx
const GA_MEASUREMENT_ID = process.env.GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID';
```

## 🔄 **Updating Files**

### **For GitHub Releases**:
1. Create new release with updated files
2. Update version numbers in your code
3. Push changes to trigger deployment

### **For External Hosting**:
1. Upload new files to your hosting service
2. Update file URLs in your download API
3. Deploy updated code

## 📊 **Monitoring**

- **GitHub Pages**: Check deployment status in Actions tab
- **Analytics**: Monitor downloads and user behavior
- **Performance**: Use Google PageSpeed Insights

## 🛠 **Troubleshooting**

### **Common Issues**:

1. **Build Fails**: Check Node.js version compatibility
2. **Files Not Found**: Verify file paths and GitHub Pages settings
3. **Styling Issues**: Ensure all assets are properly exported
4. **API Routes**: Remember GitHub Pages is static - no server-side APIs

### **Debug Commands**:
```bash
# Test build locally
npm run build
npm run start

# Check export
ls -la out/

# Test GitHub Pages locally
npx serve out/
```

Your AuraText landing page will be live at:
`https://Y4shr4j.github.io/auratext-landing-page`
