const dummyData = [
  { desc: "Room Revenue", actual: 15000, budget: 16000, lastYear: 14000 },
  { desc: "F&B Revenue", actual: 5000, budget: 5500, lastYear: 4700 },
  { desc: "Other Revenue", actual: 2000, budget: 2500, lastYear: 1800 },
];

function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin@summatool.es" && pass === "yourpassword") {
    document.getElementById("loginScreen").classList.add("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
    loadPLReport();
  } else {
    alert("Usuario o contraseña incorrectos");
  }
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function loadPLReport() {
  const tbody = document.querySelector("#plTable tbody");
  tbody.innerHTML = "";

  dummyData.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.desc}</td>
      <td>€${item.actual.toLocaleString()}</td>
      <td>${percent(item.actual, total(item)).toFixed(1)}%</td>
      <td>€${item.budget.toLocaleString()}</td>
      <td>${percent(item.budget, total(item)).toFixed(1)}%</td>
      <td>€${item.lastYear.toLocaleString()}</td>
      <td>${percent(item.lastYear, total(item)).toFixed(1)}%</td>
    `;
    tbody.appendChild(tr);
  });
}

function total(item) {
  return item.actual + item.budget + item.lastYear;
}

function percent(val, total) {
  return (val / total) * 100;
}
