document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true'); 
    alert("登录成功！");
    window.location.href = "add-car.html"; 
});