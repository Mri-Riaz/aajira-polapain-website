// তোমার Firebase প্রজেক্টের কনফিগ এখানে বসাবে
// Firebase Console → Project Settings → Web App → Config কপি করবে

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
