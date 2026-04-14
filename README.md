# 🏪 جمعہ میر جنرل اسٹور — Jumma Mir General Store

A full-featured online order management system for Jumma Mir General Store.
Built with HTML/CSS/JS + Firebase (no SQL, no backend server needed).

---

## 📁 File Structure

```
jumma-mir-store/
├── index.html         ← Customer / Buyer page
├── admin.html         ← Shopkeeper admin panel
├── firebase-config.js ← Firebase setup (YOU MUST EDIT THIS)
└── README.md
```

---

## 🔥 Step 1: Set Up Firebase (FREE)

1. Go to **https://console.firebase.google.com**
2. Click **"Add Project"** → Name it `jumma-mir-store`
3. In your project, go to **Project Settings > Your Apps > Web App**
4. Click the `</>` icon → Register app → Copy your config
5. Paste config values into `firebase-config.js`

### Enable these Firebase services:
| Service | Where to enable |
|---------|----------------|
| Authentication | Firebase Console → Authentication → Sign-in method → Email/Password → Enable |
| Realtime Database | Firebase Console → Realtime Database → Create database → Start in test mode |
| Storage | Firebase Console → Storage → Get Started |

### Create Admin Account:
1. Firebase Console → Authentication → Users → Add User
2. Use the email you set in `firebase-config.js` as `window.ADMIN_EMAIL`
3. Set a strong password

### Set Database Security Rules:
Go to Realtime Database → Rules, paste this:
```json
{
  "rules": {
    "items": {
      ".read": "auth != null",
      ".write": "auth != null && auth.token.email == 'admin@jummamir.com'"
    },
    "orders": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```
*(Replace `admin@jummamir.com` with your admin email)*

---

## 🌐 Step 2: Host on GitHub Pages (FREE)

1. Go to **https://github.com** → Login or create account
2. Click **"New Repository"**
   - Name: `jumma-mir-store`
   - Set to **Public**
   - Click Create
3. Upload all 3 files (`index.html`, `admin.html`, `firebase-config.js`)
4. Go to **Settings → Pages**
5. Under Source: select `main` branch → Save
6. Your website will be live at:
   `https://YOUR_USERNAME.github.io/jumma-mir-store/`

---

## ✨ Features

### Customer Side (index.html)
- ✅ Register / Login with email
- ✅ Browse all available items with Urdu + English names
- ✅ Add items to cart with quantity control
- ✅ Upload payment proof (image or PDF)
- ✅ Send message to shopkeeper
- ✅ View own order history and status

### Admin Side (admin.html)
- ✅ Secure admin-only login
- ✅ Add new items (Urdu + English name, price, stock, unit)
- ✅ Update stock manually
- ✅ View all orders with payment proof photos/PDFs
- ✅ Approve or reject orders with optional note
- ✅ Stock auto-deducts when order is approved
- ✅ Revenue overview dashboard

---

## 🛠️ Customization

| What to change | Where |
|----------------|-------|
| Admin email | `firebase-config.js` → `window.ADMIN_EMAIL` |
| Store name | `index.html` and `admin.html` header |
| Colors | CSS `:root` variables in both HTML files |
| WhatsApp integration | Add `wa.me/` link in order confirmation |

---

## 📞 Support
Built for Jumma Mir General Store — Rawalpindi
