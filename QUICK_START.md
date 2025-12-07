# Quick Start Guide - PCB Design Pro

## 🚀 Getting Started

### Option 1: Direct Browser Opening
1. Simply open `index.html` in your web browser
2. That's it! The application works offline

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit: `http://localhost:8000`

## 📁 Project Structure

```
pcb_design_pro/
├── index.html              # Main page - START HERE
├── pages/                  # Individual topic pages
├── assets/
│   ├── css/               # Stylesheets
│   ├── js/                # JavaScript files
│   ├── images/            # Image assets (add your images here)
│   └── videos/            # Video thumbnails
└── README.md              # Full documentation
```

## 🎯 Key Features

### Navigation
- **Home**: Landing page with overview
- **Topics**: Browse all design topics
- **Calculators**: Access design calculators
- **Resources**: Video tutorials and guides

### Calculators
1. Click any calculator button
2. Fill in the required fields
3. Click "Calculate"
4. View results instantly

### Topics
1. Click on any topic card
2. Read detailed explanations
3. Watch embedded videos
4. Use interactive elements

## 🎨 Customization

### Adding Images
1. Place images in `assets/images/`
2. Update image paths in HTML files
3. Use placeholder images for now

### Adding Videos
1. Get YouTube/Vimeo video URLs
2. Update video links in HTML
3. Add thumbnails to `assets/videos/`

### Modifying Colors
Edit CSS variables in `assets/css/main.css`:
```css
:root {
    --primary: #6366f1;      /* Change primary color */
    --bg-primary: #0f172a;   /* Change background */
    /* ... more variables */
}
```

## 📝 Creating New Topic Pages

1. Copy `pages/signal-integrity.html` as a template
2. Update the content
3. Add to navigation in `index.html`
4. Link from topic cards

## 🔧 Troubleshooting

### Images Not Showing
- Check image paths are correct
- Ensure images exist in `assets/images/`
- Use placeholder images for testing

### Calculators Not Working
- Check browser console for errors
- Ensure JavaScript is enabled
- Try refreshing the page

### Styles Not Loading
- Check CSS file paths
- Clear browser cache
- Verify file structure

## 🌐 Deployment

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in settings
3. Select main branch
4. Access via `username.github.io/repo-name`

### Netlify/Vercel
1. Connect your repository
2. Set build command: (none needed)
3. Set publish directory: `/` (root)
4. Deploy!

## 📚 Next Steps

1. **Add Your Content**: Replace placeholder content with real information
2. **Add Images**: Include PCB design images and diagrams
3. **Add Videos**: Link to actual tutorial videos
4. **Customize**: Adjust colors, fonts, and layout to your preference
5. **Expand**: Add more topics and calculators

## 💡 Tips

- Use placeholder images initially: `https://via.placeholder.com/400x225`
- Test on multiple browsers
- Check mobile responsiveness
- Optimize images before adding
- Keep content updated

---

**Need Help?** Check the full README.md for detailed documentation.
