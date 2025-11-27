// তোমার Firebase প্রজেক্টের কনফিগ এখানে বসাবে
// Firebase Console → Project Settings → Web App → Config কপি করবে

const firebaseConfig = {
  apiKey: "AIzaSyDTEhcgeJCPzKUH13UbyhapNp5UlTmm2h0",
  authDomain: "aajira-polapain-website.firebaseapp.com",
  projectId: "aajira-polapain-website",
  storageBucket: "aajira-polapain-website.firebasestorage.app",
  messagingSenderId: "1064098820782",
  appId: "1:1064098820782:web:cc28966b94b5b1c13ff33f",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
