// main.js - পাবলিক সাইটের জন্য
db.collection("admins").orderBy("name").onSnapshot(snapshot => {
  document.getElementById("adminList").innerHTML = "";
  snapshot.forEach(doc => addCard(doc.data(), "adminList"));
});

db.collection("monitors").orderBy("name").onSnapshot(snapshot => {
  document.getElementById("monitorList").innerHTML = "";
  snapshot.forEach(doc => addCard(doc.data(), "monitorList"));
});

db.collection("members").orderBy("joinDate", "desc").onSnapshot(snapshot => {
  document.getElementById("memberList").innerHTML = "";
  let count3 = 0;
  snapshot.forEach(doc => {
    addCard(doc.data(), "memberList");
    count3++;
  });
  document.getElementById("memberCount").textContent = count3;
});

function addCard(data, containerId) {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="\( {data.photo || 'images/placeholder.jpg'}" alt=" \){data.name}">
    <h3>${data.name}</h3>
    <p><i class="fas fa-phone"></i> ${data.phone}</p>
    \( {data.responsibility ? `<p><strong>দায়িত্ব:</strong> \){data.responsibility}</p>` : ''}
    \( {data.joinDate ? `<p><small>যোগদান: \){new Date(data.joinDate).toLocaleDateString('bn-BD')}</small></p>` : ''}
  `;
  document.getElementById(containerId).appendChild(div);
}
