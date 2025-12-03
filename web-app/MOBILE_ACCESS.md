# Mobile Access Guide

The Waste AI application is fully responsive and works perfectly on mobile devices. Here's how users can access the mobile-optimized pages.

## Direct Access URLs

Once deployed, users can access these pages directly on their mobile devices:

### For Citizens
**Homepage:** `https://your-domain.com/mobile/citoyen-home.html`
- View points and rewards
- Recent activity
- Quick access to reporting

**Report Waste:** `https://your-domain.com/mobile/citoyen-signal.html`
- Take photos
- AI-powered waste classification
- Submit reports

**Leaderboard:** `https://your-domain.com/mobile/citoyen-points.html`
- View ranking
- See available rewards
- Track progress

### For Agents
**Dashboard:** `https://your-domain.com/mobile/agent-dashboard.html`
- View assigned tasks
- Today's route
- Quick actions

### For Investors
**Marketplace:** `https://your-domain.com/mobile/investisseur-marketplace.html`
- Browse available materials
- Make purchases
- Track orders

### General
**Registration:** `https://your-domain.com/mobile/register.html`
- Create new account
- Select role
- Get started

**Login:** `https://your-domain.com/admin/login.html`
- Works on mobile and desktop
- Redirects based on role

## Mobile Features

All mobile pages include:

1. **Touch-Optimized Interface**
   - Large tap targets (minimum 44px)
   - Smooth scrolling
   - Gesture support

2. **Responsive Design**
   - Adapts to screen size
   - Works in portrait and landscape
   - Optimized for phones and tablets

3. **Bottom Navigation**
   - Easy thumb access
   - Persistent navigation
   - Visual feedback

4. **Camera Integration**
   - Direct camera access for reporting
   - Photo upload
   - AI classification

5. **Geolocation**
   - Automatic location detection
   - Map integration
   - Address lookup

## Progressive Web App (PWA) Features

The app can be installed on mobile devices:

### iOS (iPhone/iPad)
1. Open the site in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

The app icon will appear on your home screen.

### Android
1. Open the site in Chrome
2. Tap the menu (three dots)
3. Tap "Add to Home Screen"
4. Tap "Add"

Or Chrome may prompt you automatically to install.

## Offline Support

While the app requires internet connection for full functionality, cached pages can be viewed offline.

## Mobile Browser Support

Tested and working on:
- Safari (iOS 12+)
- Chrome (Android 8+)
- Samsung Internet
- Firefox Mobile
- Edge Mobile

## Screen Size Optimization

The app automatically adapts to:
- **Small phones:** 320px - 479px
- **Standard phones:** 480px - 767px
- **Tablets:** 768px - 1023px
- **Desktop:** 1024px+

## Performance

Mobile pages are optimized for:
- Fast loading (< 3 seconds on 3G)
- Low data usage
- Smooth animations
- Battery efficiency

## Sharing with Users

You can create QR codes for easy access:

### Example QR Code URLs

Citizen Registration:
```
https://your-domain.com/mobile/register.html
```

Citizen Home:
```
https://your-domain.com/mobile/citoyen-home.html
```

### Tips for Distribution

1. **Create QR codes** for posters and flyers
2. **Share direct links** via SMS or WhatsApp
3. **Add to Google Maps** business listing
4. **Include in email signatures**
5. **Share on social media**

## Mobile-Specific Features

### Camera Access
- Automatically requests camera permission
- Fallback to file upload if denied
- Photo compression for faster uploads

### Geolocation
- Requests location permission on first use
- Falls back to manual location entry
- Works with GPS and Wi-Fi positioning

### Notifications
- Browser push notifications (if enabled)
- In-app notification system
- SMS alerts (if configured)

## Testing on Mobile

To test before deployment:

1. **Local Testing:**
   ```bash
   npm start
   # Then access from phone using computer's IP
   # Example: http://192.168.1.100:8000
   ```

2. **Use Browser DevTools:**
   - Chrome DevTools mobile emulator
   - Safari Responsive Design Mode
   - Firefox Responsive Design Mode

3. **Real Device Testing:**
   - Deploy to staging environment
   - Test on actual devices
   - Check different screen sizes

## Common Mobile Issues

### Issue: Layout looks wrong
**Solution:** Clear browser cache, force reload (Ctrl+Shift+R)

### Issue: Camera not working
**Solution:** Check browser permissions in Settings > Privacy

### Issue: Location not detected
**Solution:** Enable location services in device settings

### Issue: App is slow
**Solution:** Check internet connection, close other apps

## Customization

To customize for your region:

1. Language settings in user profile
2. Currency in investor marketplace
3. Map center coordinates
4. Regional waste categories

## Support

For mobile-specific issues:
1. Check browser console (use remote debugging)
2. Test in incognito/private mode
3. Try different browser
4. Update device OS

## Security

Mobile pages include:
- HTTPS encryption
- Secure authentication
- No sensitive data in localStorage
- XSS protection
- CSRF protection

Your mobile users can now access Waste AI anywhere, anytime!
