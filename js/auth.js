// js/auth.js
// Sistem login, register, logout menggunakan localStorage

// === REGISTER ===
function registerUser(name, email, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];

  // Cek apakah email sudah ada
  if (users.find(u => u.email === email)) {
    alert("Email sudah terdaftar! Silakan login.");
    return;
  }

  // Tambahkan user baru + tanggal bergabung
  const newUser = {
    name,
    email,
    password,
    joinedAt: new Date().toISOString() // ⬅️ Tambahan penting
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Pendaftaran berhasil! Silakan login sekarang.");
  window.location.href = "login.html";
}


// === LOGIN ===
function loginUser(email, password) {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    alert("Email atau password salah!");
    return;
  }

  // Simpan data user yang login
  localStorage.setItem("loggedInUser", JSON.stringify(user));
  alert("Login berhasil!");
  window.location.href = "index.html";
}

// === LOGOUT ===
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  alert("Anda telah logout.");
  window.location.href = "index.html";
}

// === CEK STATUS LOGIN ===
function getLoggedInUser() {
  return JSON.parse(localStorage.getItem("loggedInUser"));
}

// === EVENT HANDLER FORM ===
document.addEventListener("DOMContentLoaded", function() {

  // Register form
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      registerUser(name, email, password);
    });
  }

  // Login form
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      loginUser(email, password);
    });
  }
});
