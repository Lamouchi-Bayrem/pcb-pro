# PCB Design Pro - Professional PCB Design Helper

A comprehensive, professional web application for PCB design assistance with advanced UI/UX, interactive guides, video tutorials, and detailed explanations.

## 🎯 Features

- 📐 **Interactive Design Guides**: Step-by-step PCB design assistance
- 🎥 **Video Tutorials**: Embedded video links for visual learning
- 📊 **Design Calculators**: Tools for trace width, via size, impedance calculations
- 🔍 **Design Rules Checker**: Automated DRC validation
- 📚 **Comprehensive Library**: Component libraries, footprints, and standards
- 🎨 **Modern UI/UX**: Professional, elegant, and responsive design
- 📱 **Mobile Responsive**: Works on all devices
- 🌐 **Multi-language Support**: International accessibility

## 🏗️ Project Structure

```
pcb_design_pro/
├── index.html                 # Main landing page
├── pages/                     # Individual topic pages
│   ├── signal-integrity.html
│   ├── power-grounding.html
│   ├── thermal-management.html
│   ├── rf-antenna.html
│   ├── layout-optimization.html
│   ├── manufacturing-process.html
│   ├── ipc-standards.html
│   ├── verification-checks.html
│   └── pre-production-checklist.html
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── components.css
│   │   └── animations.css
│   ├── js/
│   │   ├── main.js
│   │   ├── calculators.js
│   │   └── interactive.js
│   ├── images/
│   │   └── (PCB design images)
│   └── videos/
│       └── (Video thumbnails and links)
├── components/
│   ├── calculator.html
│   ├── drc-checker.html
│   └── component-library.html
└── README.md
```

## 🚀 Quick Start

### Local Development:

1. **Open in browser**:
   ```bash
   # Simply open index.html in a modern browser
   # Or use a local server:
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **Features**:
   - Navigate through topics using the sidebar
   - Use interactive calculators
   - Watch embedded video tutorials
   - Access component libraries
   - Run design rule checks

### Deploy to GitHub:

**Windows:**
```bash
git_init_and_push.bat
```

**Linux/Mac:**
```bash
chmod +x git_init_and_push.sh
./git_init_and_push.sh
```

See `GITHUB_SETUP_COMPLETE.md` for detailed instructions.

## 📖 Topics Covered

1. **Signal Integrity**: Impedance control, crosstalk, reflections
2. **Power & Grounding**: Power planes, decoupling, ground loops
3. **Thermal Management**: Heat dissipation, thermal vias, copper pours
4. **RF & Antenna Design**: RF routing, antenna placement, impedance matching
5. **Layout Optimization**: Component placement, routing strategies
6. **Manufacturing Process**: DFM guidelines, panelization, assembly
7. **IPC Standards**: Industry standards and compliance
8. **Verification Checks**: DRC, ERC, and design validation
9. **Pre-Production Checklist**: Final review before manufacturing

## 🛠️ Technologies

- HTML5
- CSS3 (with animations and modern features)
- JavaScript (ES6+)
- Chart.js (for visualizations)
- Font Awesome (icons)
- Google Fonts (typography)

## 🎥 Video Resources

This project includes links to YouTube video tutorials for PCB design topics. See `VIDEO_RESOURCES.md` for a complete list of video links.

### Popular PCB Design Channels:
- **Altium Academy**: Professional PCB design tutorials
- **Robert Feranec**: Advanced PCB design techniques
- **Phil's Lab**: RF and high-speed design
- **EEVblog**: Electronics engineering content
- **GreatScott!**: DIY electronics projects

## 🚀 GitHub Deployment

### Quick Deploy:

**Windows:**
```bash
setup_github.bat
```

**Linux/Mac:**
```bash
chmod +x setup_github.sh
./setup_github.sh
```

### Manual Deploy:
See `GITHUB_DEPLOY.md` for detailed instructions.

## 📝 License

MIT License
