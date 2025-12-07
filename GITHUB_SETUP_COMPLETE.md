# Complete GitHub Setup Instructions

## 🚀 Quick Setup (Recommended)

### Windows:
```bash
setup_github.bat
```

### Linux/Mac:
```bash
chmod +x setup_github.sh
./setup_github.sh
```

## 📋 Manual Setup Steps

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `pcb-design-pro` (or your choice)
3. Description: "Professional PCB Design Helper - Comprehensive guides, calculators, and video tutorials"
4. **Public** (for GitHub Pages)
5. **DO NOT** check "Initialize with README" (we already have files)
6. Click **Create repository**

### Step 2: Initialize Git (if not done)

```bash
cd pcb_design_pro
git init
```

### Step 3: Add Remote Repository

```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/pcb-design-pro.git
```

### Step 4: Add and Commit Files

```bash
# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: PCB Design Pro - Professional PCB design helper with video tutorials and interactive calculators"
```

### Step 5: Push to GitHub

```bash
# Set branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**:
   - Select: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/ (root)**
5. Click **Save**

### Step 7: Access Your Site

Your site will be live at:
```
https://YOUR_USERNAME.github.io/pcb-design-pro/
```

**Note**: It may take 1-2 minutes for the site to be available after enabling Pages.

## 🔄 Updating the Repository

### After Making Changes:

```bash
# Add changed files
git add .

# Commit changes
git commit -m "Update: Description of changes"

# Push to GitHub
git push origin main
```

### Updating Video Links:

1. Edit HTML files with new YouTube video IDs
2. Update thumbnail URLs
3. Commit and push:

```bash
git add pages/*.html index.html
git commit -m "Update: Added real YouTube video links"
git push origin main
```

## 📝 Video Link Format

### YouTube Video URL:
```
https://www.youtube.com/watch?v=VIDEO_ID
```

### YouTube Thumbnail:
```
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg
```

### Example:
- Video: `https://www.youtube.com/watch?v=5q6lF7Xr7qY`
- Thumbnail: `https://img.youtube.com/vi/5q6lF7Xr7qY/maxresdefault.jpg`

## 🖼️ Image Links

### Using Unsplash (Free):
```
https://images.unsplash.com/photo-PHOTO_ID?w=800&q=80
```

### Using Placeholder (Temporary):
```
https://via.placeholder.com/400x225/1a1a2e/6366f1?text=Your+Text
```

## ✅ Verification Checklist

After deployment, verify:

- [ ] Repository is public
- [ ] GitHub Pages is enabled
- [ ] Branch is set to `main`
- [ ] Folder is set to `/ (root)`
- [ ] Site URL is accessible
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Video links work
- [ ] Calculators function
- [ ] Mobile responsive

## 🐛 Troubleshooting

### Pages Not Loading:
- Wait 1-2 minutes after enabling
- Check repository is public
- Verify `index.html` is in root
- Check GitHub Pages settings

### Images Not Showing:
- Verify image URLs are correct
- Check external image sources are accessible
- Use fallback placeholder images

### Videos Not Working:
- Verify YouTube video IDs are correct
- Check video is not private/deleted
- Test links in browser

### Styles Not Loading:
- Check CSS file paths are relative
- Clear browser cache
- Verify files are committed

## 📚 Additional Resources

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [YouTube API](https://developers.google.com/youtube/v3)

---

**Ready to deploy?** Run `setup_github.bat` (Windows) or `./setup_github.sh` (Linux/Mac)!
