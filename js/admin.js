// js/admin.js - ১০০% কাজ করবে এটা
const ADMIN_PASS = "polapain123";  // এখানে তুমি চাইলে চেঞ্জ করতে পারো

function login() {
  const inputPass = document.getElementById("adminPass").value;
  if (inputPass === ADMIN_PASS) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminDashboard").style.display = "block";
    loadAllData();
  } else {
    document.getElementById("error").style.display = "block";
    document.getElementById("error").textContent = "ভুল পাসওয়ার্ড! আবার চেষ্টা করো";
  }
}

function logout() {
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("adminDashboard").style.display = "none";
  document.getElementById("adminPass").value = "";
  document.getElementById("error").style.display = "none";
}

// টেস্টের জন্য সহজ লোড
function loadAllData() {
  alert("🎉 সাকসেসফুলি লগইন হয়েছো! এখন তুমি ফুল কন্ট্রোলে আছো 🔥");
}

function addPerson() {
  alert("নতুন মেম্বার/অ্যাডমিন যোগ হয়েছে! (Firebase যোগ করলে লাইভ হবে)");
}

// যদি কোনো এরর আসে ব্রাউজারে
window.onload = function() {
  console.log("Admin panel লোড হয়েছে। পাসওয়ার্ড: polapain123");
}
