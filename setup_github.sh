#!/bin/bash

# Complete GitHub Setup Script for PCB Design Pro

echo "=========================================="
echo "PCB Design Pro - GitHub Setup"
echo "=========================================="
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed"
    echo "Please install Git from: https://git-scm.com/"
    exit 1
fi

# Initialize git if not already initialized
if [ ! -d ".git" ]; then
    echo "[1/5] Initializing Git repository..."
    git init
    echo "✓ Git repository initialized"
else
    echo "[1/5] Git repository already initialized"
fi

# Add all files
echo ""
echo "[2/5] Adding all files to Git..."
git add .
echo "✓ Files added"

# Check if remote exists
if git remote get-url origin &> /dev/null; then
    echo ""
    echo "[3/5] Remote repository already configured"
    git remote -v
else
    echo ""
    echo "[3/5] Setting up remote repository..."
    read -p "Enter your GitHub repository URL (e.g., https://github.com/username/pcb-design-pro.git): " repo_url
    
    if [ -z "$repo_url" ]; then
        echo "No URL provided. Skipping remote setup."
        echo "You can add it later with: git remote add origin YOUR_URL"
    else
        git remote add origin "$repo_url"
        echo "✓ Remote repository added: $repo_url"
    fi
fi

# Set branch to main
echo ""
echo "[4/5] Setting up branch..."
git branch -M main 2>/dev/null || echo "Branch already set to main"
echo "✓ Branch set to main"

# Initial commit if needed
if [ -z "$(git log --oneline -1 2>/dev/null)" ]; then
    echo ""
    echo "[5/5] Making initial commit..."
    git commit -m "Initial commit: PCB Design Pro - Professional PCB design helper with video tutorials and interactive calculators"
    echo "✓ Initial commit created"
else
    echo ""
    echo "[5/5] Repository already has commits"
    read -p "Make a new commit? (y/n): " make_commit
    if [ "$make_commit" = "y" ]; then
        read -p "Enter commit message: " commit_msg
        if [ -z "$commit_msg" ]; then
            commit_msg="Update: PCB Design Pro files"
        fi
        git commit -m "$commit_msg"
        echo "✓ Commit created"
    fi
fi

# Push to GitHub
echo ""
read -p "Push to GitHub now? (y/n): " push_now
if [ "$push_now" = "y" ]; then
    echo "Pushing to GitHub..."
    git push -u origin main
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "=========================================="
        echo "SUCCESS! Repository pushed to GitHub"
        echo "=========================================="
        echo ""
        echo "Next steps:"
        echo "1. Go to your GitHub repository"
        echo "2. Click Settings → Pages"
        echo "3. Select:"
        echo "   - Source: Deploy from a branch"
        echo "   - Branch: main"
        echo "   - Folder: / (root)"
        echo "4. Click Save"
        echo ""
        echo "Your site will be available at:"
        echo "https://YOUR_USERNAME.github.io/pcb-design-pro/"
        echo ""
    else
        echo ""
        echo "ERROR: Push failed"
        echo "Make sure:"
        echo "1. Repository exists on GitHub"
        echo "2. You have push permissions"
        echo "3. Remote URL is correct"
        echo ""
    fi
else
    echo ""
    echo "Setup complete! Push later with:"
    echo "  git push -u origin main"
    echo ""
fi

echo "Done!"
