document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        alert("System detects you are not logged in. Please log in first to post a car.");
        window.location.href = "log-in.html";
    }
});

document.getElementById('addCarForm').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        alert("Submission failed: Your session has expired. Please log in again.");
        window.location.href = "log-in.html";
    } else {
        alert("Car published successfully! Updated in database.");
        window.location.href = "search.html"; 
    }
});