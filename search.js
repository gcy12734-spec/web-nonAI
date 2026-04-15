document.addEventListener('DOMContentLoaded', function() {
    // 筛选标签交互
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(function(tag) {
        tag.addEventListener('click', function() {
            const siblings = this.parentElement.querySelectorAll('.filter-tag');
            siblings.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            console.log("当前更改的筛选条件:", this.innerText);
        });
    });

    // 排序按钮交互
    const sortSpans = document.querySelectorAll('.sort-bar span');
    sortSpans.forEach(function(span) {
        span.addEventListener('click', function() {
            sortSpans.forEach(s => {
                s.style.fontWeight = 'normal';
                s.style.color = 'var(--gray-text)';
            });
            this.style.fontWeight = 'bold';
            this.style.color = 'var(--primary-black)';
            alert("正在按 [" + this.innerText + "] 重新排序...");
        });
    });
});

// 跳转到车辆详情页
function showDetails(carId) {
    localStorage.setItem('selectedCar', carId);
    window.location.href = "car-detail.html";
}