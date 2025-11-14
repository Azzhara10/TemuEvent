// js/main.js
document.addEventListener("DOMContentLoaded", function() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  const navbarContainer = document.getElementById("navbarMenu");

  if (!navbarContainer) return; // kalau belum ada navbar, abaikan

  if (user) {
    navbarContainer.innerHTML = `
      <li class="nav-item"><a class="nav-link" href="profil.html">Profil</a></li>
      <li class="nav-item"><a class="nav-link text-danger" href="#" id="logoutBtn">Logout</a></li>
    `;
  } else {
    navbarContainer.innerHTML = `
      <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
      <li class="nav-item"><a class="nav-link" href="register.html">Register</a></li>
    `;
  }

  // Fungsi logout
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
      localStorage.removeItem("loggedInUser");
      alert("Anda telah logout.");
      window.location.href = "index.html";
    });
  }
});
