# GitHub Deployment Guide

## 🚀 Deploying PCB Design Pro to GitHub

### Step 1: Initialize Git Repository

```bash
cd pcb_design_pro
git init
git add .
git commit -m "Initial commit: PCB Design Pro - Professional PCB design helper"
```

### Step 2: Create GitHub Repository

1. Go to GitHub.com and create a new repository
2. Name it: `pcb-design-pro` (or your preferred name)
3. **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Copy the repository URL

### Step 3: Connect and Push

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/pcb-design-pro.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Your site will be available at: `https://YOUR_USERNAME.github.io/pcb-design-pro/`

### Step 5: Custom Domain (Optional)

1. Add a `CNAME` file in the root directory:
   ```
   yourdomain.com
   ```
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings with your custom domain

## 📝 Git Commands Reference

### Daily Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

### Updating Files

```bash
# After making changes to files
git add .
git commit -m "Update: Added video links and images"
git push origin main
```

## 🔄 Updating Video Links

When you find better video links:

1. Update the HTML files with new YouTube URLs
2. Update thumbnail images (use YouTube thumbnail format)
3. Commit and push:

```bash
git add pages/*.html index.html
git commit -m "Update: Added real YouTube video links"
git push origin main
```

## 📸 Adding Images

1. Add images to `assets/images/` directory
2. Update image paths in HTML files
3. Commit:

```bash
git add assets/images/
git add pages/*.html
git commit -m "Add: PCB design images"
git push origin main
```

## 🌐 GitHub Pages URL Format

Your site will be live at:
```
https://YOUR_USERNAME.github.io/pcb-design-pro/
```

Or with custom domain:
```
https://yourdomain.com
```

## ⚠️ Important Notes

1. **File Paths**: GitHub Pages serves from root, so ensure all paths are relative
2. **Case Sensitivity**: GitHub is case-sensitive, be careful with file names
3. **Index File**: `index.html` must be in the root directory
4. **HTTPS**: GitHub Pages automatically provides HTTPS
5. **Updates**: Changes may take a few minutes to appear after pushing

## 🔧 Troubleshooting

### Pages Not Loading
- Check repository settings → Pages
- Verify `index.html` is in root
- Check file paths are relative (not absolute)

### Images Not Showing
- Verify image paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are committed to repository

### Styles Not Loading
- Check CSS file paths
- Verify files are in correct directories
- Clear browser cache

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Markdown Guide](https://www.markdownguide.org/)
