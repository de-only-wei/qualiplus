# 🚀 Deployment Guide

Your project is now ready to deploy! Follow these steps to push to GitHub and deploy on Vercel.

## ✅ Git Setup (Already Complete)

- ✅ Git repository initialized
- ✅ All files committed
- ✅ Ready to push to GitHub

## 📦 Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Fill in the details:
   - **Repository name**: `qualiplus` (or your preferred name)
   - **Description**: "Professional air filtration products website with Next.js"
   - **Visibility**: Public or Private (your choice)
   - ⚠️ **Do NOT** initialize with README, .gitignore, or license (we already have these)
4. Click **"Create repository"**

## 🔗 Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Run these in your terminal:

```bash
cd /Users/zhengweing/Desktop/Current/qualiplus

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/qualiplus.git

# Push your code
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username!**

### 🔐 If you need authentication:

**Option A: Personal Access Token (Recommended)**

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` permissions
3. Use the token as your password when pushing

**Option B: SSH Key**

1. Generate SSH key: `ssh-keygen -t ed25519 -C "your_email@example.com"`
2. Add to GitHub: Settings → SSH and GPG keys → New SSH key
3. Use SSH URL: `git remote set-url origin git@github.com:YOUR_USERNAME/qualiplus.git`

## 🌐 Step 3: Deploy to Vercel

### Quick Deploy (Recommended)

1. Go to [Vercel](https://vercel.com)
2. Click **"Add New"** → **"Project"**
3. **Import Git Repository**:
   - Connect your GitHub account (if not already)
   - Select your `qualiplus` repository
4. **Configure Project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave as is)
   - **Build Command**: `next build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
5. Click **"Deploy"**

### Environment Variables (Optional)

If you need environment variables later:

- Add them in Vercel Dashboard → Project → Settings → Environment Variables

## ✨ Your Site Will Be Live!

After deployment, Vercel will provide you with:

- **Production URL**: `https://qualiplus.vercel.app` (or custom domain)
- **Preview URLs**: For every push to branches
- **Automatic Deployments**: Every push to `main` auto-deploys

## 🔄 Continuous Deployment

From now on:

1. Make changes locally
2. Commit: `git add . && git commit -m "your message"`
3. Push: `git push origin main`
4. Vercel automatically deploys! 🎉

## 🎯 Post-Deployment Checklist

- [ ] Test all pages on live site
- [ ] Check mobile responsiveness
- [ ] Verify animations work
- [ ] Test all links
- [ ] Add custom domain (optional)
- [ ] Enable analytics (optional)

## 📝 Quick Commands Reference

```bash
# Check git status
git status

# Stage changes
git add .

# Commit changes
git commit -m "description of changes"

# Push to GitHub
git push origin main

# View remote repository
git remote -v

# Check current branch
git branch
```

## 🆘 Troubleshooting

### Push rejected?

```bash
git pull origin main --rebase
git push origin main
```

### Wrong remote URL?

```bash
git remote set-url origin YOUR_CORRECT_URL
```

### Vercel deployment failed?

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## 🎨 Custom Domain (Optional)

1. In Vercel Dashboard → Project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate auto-generated

---

**Need help?** Check:

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [GitHub Guides](https://guides.github.com/)

Good luck with your deployment! 🚀
