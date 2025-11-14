// ===== Firebase Config =====
const firebaseConfig = {
    apiKey: "AIzaSyBcbDnzLD3G50TEbavlUl2Rt8FIO9dI6co",
    authDomain: "temuevent-88b1a.firebaseapp.com",
    projectId: "temuevent-88b1a",
    storageBucket: "temuevent-88b1a.firebasestorage.app",
    messagingSenderId: "412240523382",
    appId: "1:412240523382:web:5c66071ffa068949ce6f57",
    measurementId: "G-TMCN331GPL"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Tombol login
document.getElementById("loginBtn").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            alert("Login berhasil!");
            // Simpan info user ke localStorage jika perlu
            localStorage.setItem("loggedInUser", JSON.stringify({email: email, role: "user"}));
            window.location.href = "index.html"; // redirect ke halaman utama
        })
        .catch(error => {
            alert(error.message);
        });
});
