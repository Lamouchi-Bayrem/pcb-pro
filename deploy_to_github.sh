#!/bin/bash

# Shell script to deploy PCB Design Pro to GitHub

echo "========================================"
echo "PCB Design Pro - GitHub Deployment"
echo "========================================"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "ERROR: Git is not installed"
    echo "Please install Git: https://git-scm.com/"
    exit 1
fi

echo "[1/4] Checking Git status..."
git status

echo ""
echo "[2/4] Adding all files..."
git add .

echo ""
echo "[3/4] Committing changes..."
read -p "Enter commit message (or press Enter for default): " commit_msg
if [ -z "$commit_msg" ]; then
    commit_msg="Update: PCB Design Pro files"
fi

git commit -m "$commit_msg"

echo ""
echo "[4/4] Pushing to GitHub..."
echo ""
echo "NOTE: If this is your first push, you may need to:"
echo "  1. Create a repository on GitHub"
echo "  2. Run: git remote add origin YOUR_REPO_URL"
echo "  3. Run: git push -u origin main"
echo ""

git push origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "========================================"
    echo "SUCCESS! Files pushed to GitHub"
    echo "========================================"
    echo ""
    echo "Next steps:"
    echo "1. Go to your GitHub repository"
    echo "2. Settings > Pages"
    echo "3. Select branch: main, folder: / (root)"
    echo "4. Save and wait for deployment"
    echo ""
else
    echo ""
    echo "ERROR: Push failed. Check your remote configuration."
    echo ""
    echo "To set up remote (first time only):"
    echo "  git remote add origin https://github.com/YOUR_USERNAME/pcb-design-pro.git"
    echo "  git branch -M main"
    echo "  git push -u origin main"
    echo ""
fi
