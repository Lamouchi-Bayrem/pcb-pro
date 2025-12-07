@echo off
REM Complete GitHub Setup Script for PCB Design Pro (Windows)

echo ==========================================
echo PCB Design Pro - GitHub Setup
echo ==========================================
echo.

REM Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed
    echo Please install Git from: https://git-scm.com/
    pause
    exit /b 1
)

REM Initialize git if not already initialized
if not exist ".git" (
    echo [1/5] Initializing Git repository...
    git init
    echo ✓ Git repository initialized
) else (
    echo [1/5] Git repository already initialized
)

REM Add all files
echo.
echo [2/5] Adding all files to Git...
git add .
echo ✓ Files added

REM Check if remote exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo.
    echo [3/5] Setting up remote repository...
    set /p repo_url="Enter your GitHub repository URL (e.g., https://github.com/username/pcb-design-pro.git): "
    
    if "%repo_url%"=="" (
        echo No URL provided. Skipping remote setup.
        echo You can add it later with: git remote add origin YOUR_URL
    ) else (
        git remote add origin "%repo_url%"
        echo ✓ Remote repository added: %repo_url%
    )
) else (
    echo.
    echo [3/5] Remote repository already configured
    git remote -v
)

REM Set branch to main
echo.
echo [4/5] Setting up branch...
git branch -M main 2>nul
echo ✓ Branch set to main

REM Check if there are commits
git log --oneline -1 >nul 2>&1
if errorlevel 1 (
    echo.
    echo [5/5] Making initial commit...
    git commit -m "Initial commit: PCB Design Pro - Professional PCB design helper with video tutorials and interactive calculators"
    echo ✓ Initial commit created
) else (
    echo.
    echo [5/5] Repository already has commits
    set /p make_commit="Make a new commit? (y/n): "
    if /i "%make_commit%"=="y" (
        set /p commit_msg="Enter commit message: "
        if "%commit_msg%"=="" set commit_msg=Update: PCB Design Pro files
        git commit -m "%commit_msg%"
        echo ✓ Commit created
    )
)

REM Push to GitHub
echo.
set /p push_now="Push to GitHub now? (y/n): "
if /i "%push_now%"=="y" (
    echo Pushing to GitHub...
    git push -u origin main
    
    if errorlevel 1 (
        echo.
        echo ERROR: Push failed
        echo Make sure:
        echo 1. Repository exists on GitHub
        echo 2. You have push permissions
        echo 3. Remote URL is correct
    ) else (
        echo.
        echo ==========================================
        echo SUCCESS! Repository pushed to GitHub
        echo ==========================================
        echo.
        echo Next steps:
        echo 1. Go to your GitHub repository
        echo 2. Click Settings → Pages
        echo 3. Select:
        echo    - Source: Deploy from a branch
        echo    - Branch: main
        echo    - Folder: / (root)
        echo 4. Click Save
        echo.
        echo Your site will be available at:
        echo https://YOUR_USERNAME.github.io/pcb-design-pro/
        echo.
    )
) else (
    echo.
    echo Setup complete! Push later with:
    echo   git push -u origin main
    echo.
)

echo Done!
pause
