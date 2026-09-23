# Dr. Faizi Rhinoplasty - Medical Practice Website

Official web application for **Dr. Faizi**, ENT Surgeon & Associate Professor, FCPS, FACS (USA), Rhinoplasty & FESS Expert, Member Rhinoplasty Society of Europe.

---

## 🚀 Netlify Deployment Guide (Netlify par Deploy karne ka Tareeqa)

This application is fully pre-configured and optimized for **1-click / automated deployment on Netlify**.

### 1. Pre-configured Files (Tayaar Shuda Files)
- **`netlify.toml`**: Contains build commands (`npm run build`), publish directory (`dist`), SPA redirects, and security caching headers.
- **`public/_redirects`**: Ensures Single-Page Application (SPA) routes (`/rhinoplasty`, `/about`, `/contact`, etc.) do not return 404 errors on direct navigation or page refresh.
- **`public/images/`**: High-resolution clinical and doctor portrait assets pre-configured for static CDN delivery.

---

### Option A: Deploy via GitHub / GitLab (Recommended - automatic continuous deployment)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Dr Faizi Rhinoplasty Website"
   git branch -M main
   git remote add origin https://github.com/your-username/dr-faizi-rhinoplasty.git
   git push -u origin main
   ```

2. **Login to Netlify:**
   - Go to [netlify.com](https://www.netlify.com/) and click **Log In** / **Sign Up**.
   - Click **"Add new site"** -> **"Import an existing project"**.
   - Select **GitHub** and authorize your repository.

3. **Deploy Settings (Autodetected via `netlify.toml`):**
   - **Base directory:** *(leave blank)*
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Click **"Deploy dr-faizi-rhinoplasty"**.

4. Your site will be live with an SSL certificate (`https://your-site.netlify.app`) in under 1 minute!

---

### Option B: Deploy via Netlify CLI (Direct Terminal Deploy)

1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
2. Build the production bundle:
   ```bash
   npm run build
   ```
3. Deploy to Netlify:
   ```bash
   netlify deploy --prod --dir=dist
   ```

---

### Option C: Drag & Drop Deploy (Bina Git ke)

1. Run `npm run build` in your local project folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the generated `dist` folder into the browser window.
4. Your website is instantly live!

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Type check
npm run lint
```

---

## 🩺 Doctor & Practice Information

- **Doctor:** Dr. Faizi
- **Designation:** ENT Surgeon & Associate Professor
- **Qualifications:** FCPS, FACS (USA)
- **Specialization:** Rhinoplasty & FESS Expert
- **Society Membership:** Member Rhinoplasty Society of Europe
- **Contact Phone:** 03333880332
- **WhatsApp:** +92 333 3880332
- **Email:** rhinoplastyinpakistan@gmail.com
- **Instagram:** [@drfaizi.rhinoplasty](https://www.instagram.com/drfaizi.rhinoplasty/)
- **Facebook:** [DrFaizi.Rhinoplasty](https://www.facebook.com/DrFaizi.Rhinoplasty/)
