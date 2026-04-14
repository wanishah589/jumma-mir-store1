// ============================================================
// JUMMA MIR GENERAL STORE — Firebase Configuration
// ============================================================
// STEP 1: Go to https://console.firebase.google.com
// STEP 2: Create a new project named "jumma-mir-store"
// STEP 3: Go to Project Settings > Your Apps > Add Web App
// STEP 4: Copy your config values below
// STEP 5: Replace all the "YOUR_..." values below
// ============================================================

const firebaseConfig = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  databaseURL:       "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ============================================================
// ADMIN EMAIL — Change this to YOUR admin email
// This email must be registered in Firebase Authentication
// ============================================================
window.ADMIN_EMAIL = "admin@jummamir.com"; // <-- Change this!

// ============================================================
// FIREBASE SETUP CHECKLIST:
// ✅ 1. Enable Email/Password Authentication
//       Firebase Console > Authentication > Sign-in method > Email/Password
// ✅ 2. Enable Realtime Database
//       Firebase Console > Realtime Database > Create database (test mode)
// ✅ 3. Enable Storage
//       Firebase Console > Storage > Get started
// ✅ 4. Create admin account
//       Authentication > Add user > use your ADMIN_EMAIL above
// ✅ 5. Set Realtime Database rules:
//       {
//         "rules": {
//           "items": { ".read": "auth != null", ".write": "auth != null && auth.token.email == 'admin@jummamir.com'" },
//           "orders": { ".read": "auth != null && (auth.token.email == 'admin@jummamir.com' || data.child('userId').val() == auth.uid)", ".write": "auth != null" }
//         }
//       }
// ============================================================
