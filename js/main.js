// js/main.js - Firebase থেকে লাইভ ডাটা লোড করবে (১০০% কাজ করবে)

// অ্যাডমিন লোড
db.collection("admins").orderBy("name").onSnapshot(snapshot => {
  const container = document.getElementById("adminList");
  container.innerHTML = "";
  snapshot.forEach(doc => addCard(doc.data(), container));
});

// মনিটর লোড
db.collection("monitors").orderBy("name").onSnapshot(snapshot => {
  const container = document.getElementById("monitorList");
  container.innerHTML = "";
  snapshot.forEach(doc => addCard(doc.data(), container));
});

// মেম্বার লোড + কাউন্ট
db.collection("members").orderBy("joinDate", "desc").onSnapshot(snapshot => {
  const container = document.getElementById("memberList");
  container.innerHTML = "";
  let count = 0;
  snapshot.forEach(doc => {
    let data = doc.data();
    if (data.joinDate && data.joinDate.toDate) {
      data.joinDate = data.joinDate.toDate();
    }
    addCard(data, container);
    count++;
  });
  document.getElementById("memberCount").textContent = count;
});

// কার্ড তৈরি করার ফাংশন
function addCard(data, container) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="\( {data.photo || 'https://via.placeholder.com/150?text=No+Photo'}" alt=" \){data.name || 'নাম নেই'}">
    <h3>${data.name || 'অজানা'}</h3>
    <p><i class="fas fa-phone"></i> ${data.phone || 'নম্বর নেই'}</p>
    \( {data.responsibility ? `<p><strong>দায়িত্ব:</strong> \){data.responsibility}</p>` : ''}
    \( {data.joinDate ? `<p><small>যোগদান: \){data.joinDate.toLocaleDateString('bn-BD')}</small></p>` : ''}
  `;
  container.appendChild(div);
}
