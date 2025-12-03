# Waste AI - Intelligent Waste Management System

A comprehensive web application for waste management with AI-powered features, designed for Algeria's waste management needs.

## Features

- **Admin Dashboard**: Full management interface for administrators
- **Citizen Portal**: Report waste, earn points, view leaderboard
- **Agent Interface**: Optimized collection routes and task management
- **Investor Marketplace**: Purchase recyclable materials

## Technology Stack

- Pure HTML5, CSS3, JavaScript (no frameworks)
- Fully responsive design (mobile-first)
- Static site (no build process required)
- Ready for deployment to any static hosting service

## Project Structure

```
web-app/
├── index.html              # Landing page
├── admin/                  # Admin dashboard pages
│   ├── dashboard.html
│   ├── map.html
│   ├── reports.html
│   ├── collections.html
│   ├── users.html
│   ├── analytics.html
│   ├── settings.html
│   └── login.html
├── mobile/                 # Responsive user pages
│   ├── citoyen-home.html
│   ├── citoyen-signal.html
│   ├── citoyen-points.html
│   ├── agent-dashboard.html
│   ├── investisseur-marketplace.html
│   └── register.html
├── css/                    # Stylesheets
│   ├── style.css          # Global styles
│   ├── admin.css          # Admin-specific styles
│   └── mobile.css         # Responsive styles
└── js/
    └── app.js             # Core application logic
```

## Deployment

### Deploy to Netlify

1. Push code to GitHub/GitLab
2. Connect repository to Netlify
3. Deploy settings are already configured in `netlify.toml`
4. Deploy automatically

**Or use Netlify CLI:**

```bash
npm install -g netlify-cli
cd web-app
netlify deploy --prod
```

### Deploy to Vercel

```bash
npm install -g vercel
cd web-app
vercel --prod
```

### Deploy to GitHub Pages

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and `/` folder
4. Save and deploy

### Deploy to any Static Host

Simply upload all files in the `web-app` directory to your hosting provider.

## Local Development

No build process required. Simply open `index.html` in a browser or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## User Roles

### Admin
- Email: admin@waste.dz
- Password: password
- Access: Full system management

### Citizen
- Email: ahmed@gmail.com
- Password: password
- Access: Report waste, earn points

### Agent
- Email: fatima@gmail.com
- Password: password
- Access: Collection management

### Investor
- Email: contact@greentech.dz
- Password: password
- Access: Marketplace

## Responsive Design

The application is fully responsive and works on:
- Mobile devices (320px - 767px)
- Tablets (768px - 1023px)
- Desktop (1024px+)

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features

### For Citizens
- Take photos and report waste locations
- AI-powered waste classification
- Gamification with points and leaderboard
- Track report status
- Earn rewards

### For Agents
- View assigned collection tasks
- Optimized route planning
- Real-time task updates
- Performance tracking

### For Investors
- Browse available recyclable materials
- Purchase materials
- Track orders
- View analytics

### For Administrators
- Dashboard with real-time statistics
- Interactive map view
- Report management
- User management
- Analytics and reporting
- System settings

## Customization

### Colors
Edit `css/style.css` to change the color scheme:

```css
:root {
  --primary-green: #22c55e;
  --dark-green: #16a34a;
  /* ... more colors */
}
```

### Adding New Pages
1. Create HTML file in appropriate directory
2. Include required CSS files
3. Link to `js/app.js` for shared functionality

## License

Copyright 2025 - All rights reserved
