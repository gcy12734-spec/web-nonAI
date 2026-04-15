document.addEventListener('DOMContentLoaded', function() {
    // 读取本地存储的登录状态
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    const navLogin = document.getElementById('nav-login');
    const navRegister = document.getElementById('nav-register');
    const navLogout = document.getElementById('nav-logout');

    if (isLoggedIn) {
        // 如果已登录：隐藏登录和注册，显示退出登录
        if (navLogin) navLogin.style.display = 'none';
        if (navRegister) navRegister.style.display = 'none';
        if (navLogout) navLogout.style.display = 'inline-block';
    } else {
        // 如果未登录：确保退出按钮是隐藏的
        if (navLogout) navLogout.style.display = 'none';
    }

    // 绑定退出登录的点击事件
    const logoutBtn = document.querySelector('#nav-logout a');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            localStorage.removeItem('isLoggedIn');
            alert("You have successfully logged out!"); // 改为英文
            window.location.href = "index.html"; 
        });
    }
});