# Build & Deployment Instructions

This React + Vite application is optimized for production deployment. Follow these instructions to build and deploy your application.

## 📦 Building for Production

### 1. Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Build the Application
```bash
npm run build
```

This will:
- Create an optimized production build in the `dist/` directory
- Bundle and minify all assets
- Generate source maps (configurable)
- Split vendor and router code into separate chunks for better caching

### 3. Preview the Build Locally
```bash
npm run preview
```
This starts a local server to preview the production build at `http://localhost:3000`

## 🌐 Deployment Options

### Option 1: Static File Server (NGINX, Apache, etc.)

#### NGINX Configuration
Create an NGINX server block:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/your/dist;
    index index.html;

    # Handle client-side routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' http: https: data: blob: 'unsafe-inline'" always;
}
```

#### Apache Configuration (.htaccess)
Place this in your `dist/` directory:

```apache
RewriteEngine On
RewriteBase /

# Handle client-side routing
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]

# Cache static assets
<FilesMatch "\.(css|js|png|jpg|jpeg|gif|ico|svg|woff|woff2)$">
    ExpiresActive On
    ExpiresDefault "access plus 1 year"
</FilesMatch>
```

### Option 2: Subpath Deployment

If deploying to a subdirectory (e.g., `https://example.com/my-app/`):

1. Set the base path in your environment:
```bash
VITE_BASE_PATH=/my-app/ npm run build
```

2. Or configure it in `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/my-app/',
  // ... other config
});
```

### Option 3: CDN Deployment

#### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

#### Vercel
1. Import your project to Vercel
2. Vercel will auto-detect Vite configuration
3. Deploy with zero configuration

#### GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:

"deploy": "gh-pages -d dist"

# Deploy
npm run build && npm run deploy
```

## 🔧 Environment Configuration

### Development
Copy `.env.development` and customize:
```bash
cp .env.development .env.local
```

### Production
Set environment variables on your hosting platform:
- `VITE_APP_TITLE`: Your application title
- `VITE_API_BASE_URL`: Your API base URL
- `VITE_ENABLE_ANALYTICS`: Enable/disable analytics
- `VITE_BASE_PATH`: Base path for subpath deployments

## 🚀 Performance Optimization

### Automatic Optimizations Included:
- **Code splitting**: Vendor and router code are split into separate chunks
- **Tree shaking**: Unused code is automatically removed
- **Asset optimization**: Images and other assets are optimized
- **Compression**: Built-in gzip/brotli support
- **Caching**: Proper cache headers for static assets

### Additional Optimizations:
1. **Enable compression on your server**:
   ```nginx
   gzip on;
   gzip_types text/plain text/css application/javascript application/json;
   ```

2. **Use a CDN** for static assets
3. **Enable HTTP/2** on your server
4. **Implement proper caching headers**

## 📊 Build Analysis

Analyze your bundle size:
```bash
npm run build -- --mode analyze
```

## 🔍 Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `npm ci`
- Clear cache: `rm -rf node_modules/.vite` or `rm -rf node_modules/.cache`
- Check for TypeScript errors: `npm run type-check`

### Deployment Issues
- **404 on refresh**: Ensure your server is configured for client-side routing
- **Assets not loading**: Check the `base` configuration in `vite.config.ts`
- **CORS issues**: Configure your API server to allow requests from your domain

### Performance Issues
- Use `npm run preview` to test the production build locally
- Check Network tab in browser DevTools for loading issues
- Verify compression is enabled on your server

## 📝 Production Checklist

Before deploying to production:

- [ ] Update environment variables for production
- [ ] Test the production build locally with `npm run preview`
- [ ] Verify all routes work correctly (no 404s on refresh)
- [ ] Check that all assets load properly
- [ ] Test on multiple devices/browsers
- [ ] Verify analytics and tracking (if enabled)
- [ ] Configure proper security headers
- [ ] Set up monitoring and error tracking
- [ ] Configure automated backups
- [ ] Test deployment rollback procedure

## 🔧 Advanced Configuration

### Custom Build Options
Modify `vite.config.ts` for advanced configuration:
- Source maps: `build.sourcemap`
- Output directory: `build.outDir`
- Asset inlining: `build.assetsInlineLimit`
- Bundle analysis: `build.rollupOptions.output.manualChunks`

### Multiple Environments
Create environment-specific build commands:
```json
{
  "scripts": {
    "build:staging": "vite build --mode staging",
    "build:production": "vite build --mode production"
  }
}
```

For more information, see the [Vite deployment guide](https://vitejs.dev/guide/build.html).
