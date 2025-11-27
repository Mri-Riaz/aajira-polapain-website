// js/main.js - লাইভ Firebase ডাটা লোড করবে
const db = firebase.firestore();

// অ্যাডমিন লোড
db.collection("admins").orderBy("name").onSnapshot(snapshot => {
  document.getElementById("adminList").innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    addCard(data, "adminList");
  });
});

// মনিটর লোড
db.collection("monitors").orderBy("name").onSnapshot(snapshot => {
  document.getElementById("monitorList").innerHTML = "";
  snapshot.forEach(doc => {
    const data = doc.data();
    addCard(data, "monitorList");
  });
});

// মেম্বার লোড + কাউন্ট
db.collection("members").orderBy("joinDate", "desc").onSnapshot(snapshot => {
  document.getElementById("memberList").innerHTML = "";
  let count = 0;
  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.joinDate) data.joinDate = data.joinDate.toDate();
    addCard(data, "memberList");
    count++;
  });
  document.getElementById("memberCount").textContent = count;
});

function addCard(data, containerId) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="\( {data.photo || 'https://via.placeholder.com/150?text=No+Photo'}" alt=" \){data.name}">
    <h3>${data.name}</h3>
    <p><i class="fas fa-phone"></i> ${data.phone}</p>
    \( {data.responsibility ? `<p><strong>দায়িত্ব:</strong> \){data.responsibility}</p>` : ''}
    \( {data.joinDate ? `<p><small>যোগদান: \){data.joinDate.toLocaleDateString('bn-BD')}</small></p>` : ''}
  `;
  document.getElementById(containerId).appendChild(div);
}
