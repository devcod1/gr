# Deployment Guide - Waste AI

This guide will help you deploy the Waste AI application to various hosting platforms.

## Quick Deploy

The application is a static website with no build process required. All pages (including mobile pages) are fully responsive and work on all devices.

## Hosting Options

### 1. Netlify (Recommended)

**Method 1: Deploy from Git**
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build settings are automatically detected from `netlify.toml`
6. Click "Deploy site"

**Method 2: Drag and Drop**
1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the `web-app` folder onto the page
3. Your site will be live instantly

**Method 3: Netlify CLI**
```bash
npm install -g netlify-cli
cd web-app
netlify login
netlify deploy --prod
```

Your site will be available at: `https://[random-name].netlify.app`

### 2. Vercel

**Method 1: Vercel CLI**
```bash
npm install -g vercel
cd web-app
vercel login
vercel --prod
```

**Method 2: Vercel Dashboard**
1. Go to [Vercel](https://vercel.com)
2. Import your Git repository
3. Deploy automatically

Your site will be available at: `https://[project-name].vercel.app`

### 3. GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select branch (usually `main` or `master`)
4. Select folder: `/ (root)` or `/web-app`
5. Click Save

Your site will be available at: `https://[username].github.io/[repository-name]`

### 4. Firebase Hosting

```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select web-app as public directory
# Configure as single-page app: No
firebase deploy
```

### 5. Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Connect your Git repository
3. Build settings:
   - Build command: (leave empty)
   - Build output directory: `.` or `web-app`
4. Deploy

### 6. Surge.sh

```bash
npm install -g surge
cd web-app
surge
```

### 7. Render

1. Go to [Render](https://render.com)
2. New > Static Site
3. Connect your repository
4. Build command: (leave empty)
5. Publish directory: `web-app`
6. Deploy

## Custom Domain Setup

### Netlify
1. Go to Site settings > Domain management
2. Add custom domain
3. Follow DNS configuration instructions

### Vercel
1. Go to Project Settings > Domains
2. Add your domain
3. Configure DNS records

### GitHub Pages
1. Add `CNAME` file in root with your domain
2. Configure DNS:
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   CNAME www   [username].github.io
   ```

## Environment Configuration

The application currently uses mock data. To connect to a real backend:

1. Update `js/app.js` to point to your API
2. Add environment-specific configuration
3. Update authentication logic

## Mobile App Access

Once deployed, users can access the mobile-optimized pages at:

- Citizen portal: `https://your-domain.com/mobile/citoyen-home.html`
- Agent dashboard: `https://your-domain.com/mobile/agent-dashboard.html`
- Investor marketplace: `https://your-domain.com/mobile/investisseur-marketplace.html`
- Registration: `https://your-domain.com/mobile/register.html`

All pages are responsive and work on:
- Mobile phones (iOS/Android)
- Tablets
- Desktop computers

## Testing Your Deployment

After deployment, test:

1. Landing page loads correctly
2. All navigation links work
3. Mobile pages display properly on phones
4. Admin dashboard is accessible
5. Forms submit correctly
6. All CSS and JS files load

## Performance Optimization

The site is already optimized with:
- Static file caching (1 year for CSS/JS)
- Security headers
- Responsive images
- Minimal dependencies

## Troubleshooting

### Pages not loading
- Check that all file paths are correct
- Ensure `index.html` is in the root directory

### Styles not applying
- Verify CSS file paths are relative
- Check browser console for 404 errors

### Mobile pages not responsive
- Clear browser cache
- Check viewport meta tag is present
- Verify mobile.css is loading

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Test in incognito/private mode
4. Check hosting provider status

## Post-Deployment Checklist

- [ ] Landing page accessible
- [ ] All role pages load correctly
- [ ] Mobile pages work on actual mobile devices
- [ ] Admin login works
- [ ] Navigation between pages works
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)
- [ ] Analytics added (optional)
- [ ] Performance tested

Your Waste AI application is now live and accessible on all devices!
