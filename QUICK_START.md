# Quick Start Guide - ISKOM Solutions Website

## 🚀 Opening the Website Locally

### Option 1: Double-click
Simply double-click on `index.html` to open it in your default browser.

### Option 2: Right-click
Right-click on `index.html` → Open With → Choose your preferred browser

### Option 3: Drag and Drop
Drag `index.html` into an open browser window

## 📤 Deploying to the Web

### GitHub Pages (Free)
1. Create a GitHub account at https://github.com
2. Create a new repository named "iskom-website"
3. Upload all files to the repository
4. Go to Settings → Pages
5. Select "main" branch and save
6. Your site will be live at: `https://yourusername.github.io/iskom-website`

### Netlify (Free)
1. Go to https://www.netlify.com
2. Sign up for a free account
3. Drag and drop the entire `Iskom` folder
4. Your site will be live instantly with a custom URL

### Vercel (Free)
1. Go to https://vercel.com
2. Sign up for a free account
3. Click "New Project"
4. Import your files
5. Deploy with one click

### Traditional Web Hosting
1. Purchase hosting from providers like:
   - Bluehost
   - HostGator
   - SiteGround
   - GoDaddy
2. Use FTP/cPanel to upload all files
3. Ensure `index.html` is in the root directory

## 🔧 Making the Contact Form Work

The contact form currently has client-side validation only. To make it send emails:

### Option 1: Formspree (Easiest)
1. Go to https://formspree.io
2. Sign up for free
3. Create a new form
4. Replace the form tag in `contact.html`:
```html
<form id="contactForm" class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 2: EmailJS (Free)
1. Go to https://www.emailjs.com
2. Sign up and create an email service
3. Add EmailJS script to contact.html
4. Update the form submission handler in script.js

### Option 3: Backend (PHP)
Create a `send-email.php` file on your server and update the form action.

## 📝 Customization Tips

### Changing Colors
Edit `/css/style.css` lines 13-20:
```css
--color-dark-green: #004030;
--color-sage-green: #9CAF88;
--color-off-white: #F0F4E8;
--color-maroon: #B22222;
```

### Adding Your Logo
1. Save your logo as `logo.png` in an `images/` folder
2. Replace the text logo in each HTML file:
```html
<a href="index.html" class="logo">
    <img src="images/logo.png" alt="ISKOM Solutions">
</a>
```

### Updating Contact Information
Edit `contact.html` and update:
- Email address
- Phone number
- Physical address
- Business hours

## 📱 Testing Responsiveness

Test your site on different devices:
1. **Desktop**: Open in browser at full width
2. **Tablet**: Resize browser to ~768px width
3. **Mobile**: Resize browser to ~375px width

Or use browser DevTools:
- Chrome: F12 → Toggle Device Toolbar
- Firefox: F12 → Responsive Design Mode
- Safari: Develop → Enter Responsive Design Mode

## 🔍 SEO Optimization

Before deploying:
1. Update meta descriptions in each HTML file
2. Add your business address to contact page
3. Create a `sitemap.xml` file
4. Add Google Analytics code
5. Submit to Google Search Console

## ✅ Pre-Launch Checklist

- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Update all placeholder content
- [ ] Add your logo and branding
- [ ] Test in multiple browsers
- [ ] Optimize images for web
- [ ] Add favicon.ico
- [ ] Set up SSL certificate (HTTPS)
- [ ] Test page load speed

## 🆘 Troubleshooting

**Problem**: Styles not loading
- **Solution**: Ensure `css/style.css` path is correct

**Problem**: JavaScript not working
- **Solution**: Check browser console for errors (F12)

**Problem**: Mobile menu not opening
- **Solution**: Ensure `js/script.js` is loaded correctly

**Problem**: Form not submitting
- **Solution**: Set up a backend service (see "Making the Contact Form Work")

## 📞 Need Help?

If you encounter any issues:
1. Check the README.md file
2. Verify all files are in the correct folders
3. Clear browser cache and refresh
4. Check browser console for errors (F12)

---

**Happy Deploying! 🎉**
