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

    if (!nameRegex.test(name)) return alert("Validation failed: Name can only contain English letters and spaces.");
    if (!addrRegex.test(address)) return alert("Validation failed: Address can only contain letters, numbers, and spaces.");
    if (!phoneRegex.test(phone)) return alert("Validation failed: Please enter a valid 11-digit mobile number.");
    if (!emailRegex.test(email)) return alert("Validation failed: Email must contain '@' and end with .cn or .com.");
    if (!accountRegex.test(username)) return alert("Validation failed: Username must be at least 6 letters or numbers.");
    if (!accountRegex.test(password)) return alert("Validation failed: Password must be at least 6 letters or numbers.");

    alert("Registration successful! Welcome to Online Car Sale.");
    window.location.href = "log-in.html"; 
});