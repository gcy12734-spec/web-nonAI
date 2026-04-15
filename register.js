document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault(); 
    const nameRegex = /^[A-Za-z\s]+$/;         
    const addrRegex = /^[A-Za-z0-9\s]+$/;      
    const phoneRegex = /^1[3-9]\d{9}$/;        
    const emailRegex = /^[^@]+@[^@]+\.(cn|com)$/; 
    const accountRegex = /^[A-Za-z0-9]{6,}$/;  

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!nameRegex.test(name)) return alert("验证失败：姓名只能包含英文字母和空格。");
    if (!addrRegex.test(address)) return alert("验证失败：地址只能包含英文字母、数字和空格。");
    if (!phoneRegex.test(phone)) return alert("验证失败：请输入有效的中国手机号码（11位）。");
    if (!emailRegex.test(email)) return alert("验证失败：邮箱必须包含一个 '@' 且以 .cn 或 .com 结尾。");
    if (!accountRegex.test(username)) return alert("验证失败：用户名必须至少包含6个字母或数字。");
    if (!accountRegex.test(password)) return alert("验证失败：密码必须至少包含6个字母或数字。");

    alert("注册成功！欢迎加入 Online Car Sale。");
    window.location.href = "log-in.html"; 
});