const ADMIN_PASS = "polapain123"; // এটা চেঞ্জ করো

function login() {
  if (document.getElementById("adminPass").value === ADMIN_PASS) {
    document.getElementById("loginScreen").style.display = "none";
    document.getElementById("adminDashboard").style.display = "block";
    loadAllData();
  } else {
    document.getElementById("error").style.display = "block";
  }
}

function logout() {
  document.getElementById("loginScreen").style.display = "flex";
  document.getElementById("adminDashboard").style.display = "none";
  document.getElementById("adminPass").value = "";
}

function addPerson() {
  const type = document.getElementById("typeSelect").value;
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const photo = document.getElementById("photo").value;
  const responsibility = document.getElementById("responsibility").value;

  const data = { name, phone, photo: photo || null };
  if (responsibility) data.responsibility = responsibility;
  if (type === "members") data.joinDate = new Date().toISOString();

  db.collection(type).add(data).then(() => {
    alert("যোগ হয়েছে!");
    clearForm();
  });
}

function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("photo").value = "";
  document.get |ElementById("responsibility").value = "";
}

function loadAllData() {
  ["admins", "monitors", "members"].forEach(col => {
    db.collection(col).onSnapshot(snap => {
      const container = document.getElementById(col + "Admin");
      container.innerHTML = "";
      snap.forEach(doc => {
        const d = doc.data();
        const div = document.createElement("div");
        div.className = "card";
        div.innerHTML = `
          <img src="\( {d.photo || '../images/placeholder.jpg'}" alt=" \){d.name}">
          <h3>${d.name}</h3>
          <p>${d.phone}</p>
          \( {d.responsibility ? `<p><strong> \){d.responsibility}</strong></p>` : ''}
          <button onclick="deletePerson('\( {col}', ' \){doc.id}')" style="background:red;color:white;">ডিলিট</button>
        `;
        container.appendChild(div);
      });
    });
  });
}

function deletePerson(collection, id) {
  if (confirm("ডিলিট করবেন?")) {
    db.collection(collection).doc(id).delete();
  }
}
