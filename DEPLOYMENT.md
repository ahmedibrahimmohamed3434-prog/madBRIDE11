# Deployment Guide

This document outlines the steps required to deploy the MadBird Studio project to GitHub and eventually to a hosting provider.

## 1. GitHub Deployment Workflow

Follow these exact commands in your terminal to initialize your Git repository and push your code to GitHub:

### Initialize Git Repository
Make sure you are in the project root directory (`madbird-website`) in your terminal.

```bash
git init
```

### Add Files and Commit
Add all project files. (Sensitive files like `.env` and large directories like `node_modules` are safely ignored via the `.gitignore` file).

```bash
git add .
git commit -m "Initial commit: MadBird Studio website"
```

### Link to GitHub and Push
1. Go to [GitHub](https://github.com/new) and create a new repository. **Do not** initialize it with a README, license, or gitignore file.
2. Copy the URL of your new repository.
3. Run the following commands, replacing `YOUR_GITHUB_REPO_URL` with the URL you just copied (e.g., `https://github.com/username/madbird-website.git`):

```bash
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## 2. Production Deployment (e.g., Vercel)

The easiest way to deploy a Next.js application is through Vercel.

1. Go to [Vercel](https://vercel.com/) and sign in with your GitHub account.
2. Click **Add New...** -> **Project**.
3. Import your newly created GitHub repository.
4. Vercel will automatically detect that this is a Next.js framework.
5. In the **Environment Variables** section, add any production environment variables you might need (e.g., API keys, email service credentials).
6. Click **Deploy**.

Your website will build and deploy, and Vercel will provide you with a live URL.
