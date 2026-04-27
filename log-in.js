document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true'); 
    alert("Login successful!");
    window.location.href = "add-car.html"; 
});