document.getElementById('addCarForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("车辆发布成功！已在库中更新。");
    window.location.href = "search.html"; 
});