#!/bin/bash

# Complete Git initialization and GitHub push script

echo "========================================"
echo "PCB Design Pro - GitHub Deployment"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed"
    echo "Install from: https://git-scm.com/downloads"
    exit 1
fi

echo "Git is installed:"
git --version
echo ""

# Initialize git repository
if [ ! -d ".git" ]; then
    echo "[Step 1/6] Initializing Git repository..."
    git init
    echo "✓ Repository initialized"
else
    echo "[Step 1/6] Git repository already exists"
fi

echo ""
echo "[Step 2/6] Adding all files..."
git add .
echo "✓ Files staged"

echo ""
echo "[Step 3/6] Creating initial commit..."
git commit -m "Initial commit: PCB Design Pro - Professional PCB design helper with video tutorials, interactive calculators, and comprehensive guides"
echo "✓ Commit created"

echo ""
echo "[Step 4/6] Setting branch to main..."
git branch -M main
echo "✓ Branch set to main"

echo ""
echo "[Step 5/6] Remote repository setup..."
echo ""
echo "IMPORTANT: You need to create a repository on GitHub first!"
echo ""
echo "Steps:"
echo "1. Go to https://github.com/new"
echo "2. Create a new repository named: pcb-design-pro"
echo "3. DO NOT initialize with README"
echo "4. Copy the repository URL"
echo ""
read -p "Enter your GitHub repository URL (or press Enter to skip): " repo_url

if [ ! -z "$repo_url" ]; then
    git remote add origin "$repo_url" 2>/dev/null || git remote set-url origin "$repo_url"
    echo "✓ Remote repository configured"
    echo ""
    echo "[Step 6/6] Pushing to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "========================================"
        echo "SUCCESS! Repository pushed to GitHub"
        echo "========================================"
        echo ""
        echo "Next: Enable GitHub Pages"
        echo "1. Go to: https://github.com/YOUR_USERNAME/pcb-design-pro/settings/pages"
        echo "2. Source: Deploy from a branch"
        echo "3. Branch: main, Folder: / (root)"
        echo "4. Click Save"
        echo ""
        echo "Your site will be at:"
        echo "https://YOUR_USERNAME.github.io/pcb-design-pro/"
        echo ""
    else
        echo ""
        echo "ERROR: Push failed"
        echo ""
        echo "Possible reasons:"
        echo "- Repository doesn't exist on GitHub"
        echo "- Authentication required"
        echo "- Wrong repository URL"
        echo ""
        echo "To authenticate:"
        echo "  git config --global user.name 'Your Name'"
        echo "  git config --global user.email 'your.email@example.com'"
        echo ""
    fi
else
    echo ""
    echo "Remote setup skipped."
    echo ""
    echo "To add remote later:"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/pcb-design-pro.git"
    echo "  git push -u origin main"
    echo ""
fi

echo ""
echo "========================================"
echo "Setup Complete!"
echo "========================================"
