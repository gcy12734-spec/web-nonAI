document.addEventListener('DOMContentLoaded', function() {
    // 筛选标签交互
    const filterTags = document.querySelectorAll('.filter-tag');
    filterTags.forEach(function(tag) {
        tag.addEventListener('click', function() {
            const siblings = this.parentElement.querySelectorAll('.filter-tag');
            siblings.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            updateCarDisplay();
        });
    });

    // 排序按钮交互
    const sortBtns = document.querySelectorAll('.sort-btn');
    sortBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            sortBtns.forEach(s => {
                s.style.fontWeight = 'normal';
                s.style.color = 'var(--gray-text)';
                s.classList.remove('active');
            });
            this.style.fontWeight = 'bold';
            this.style.color = 'var(--primary-black)';
            this.classList.add('active');
            updateCarDisplay();
        });
    });
});

// 核心过滤与排序引擎 (已翻译为英文逻辑)
function updateCarDisplay() {
    const brandFilter = document.querySelector('#brand-filters .active').innerText;
    const priceFilter = document.querySelector('#price-filters .active').innerText;
    const typeFilter = document.querySelector('#type-filters .active').innerText;
    const sortType = document.querySelector('.sort-bar .active').getAttribute('data-sort');

    const resultsContainer = document.getElementById('results');
    let carCards = Array.from(document.querySelectorAll('.car-card')); 

    carCards.forEach(card => {
        const cardBrand = card.getAttribute('data-brand');
        const cardPrice = parseInt(card.getAttribute('data-price'), 10);
        const cardType = card.getAttribute('data-type');

        // 改为匹配英文 "Any"
        let isBrandMatch = (brandFilter === 'Any' || brandFilter === cardBrand);
        let isTypeMatch = (typeFilter === 'Any' || typeFilter === cardType);
        
        let isPriceMatch = true;
        if (priceFilter === 'Under 30k') isPriceMatch = (cardPrice < 30000);
        else if (priceFilter === '30k - 50k') isPriceMatch = (cardPrice >= 30000 && cardPrice <= 50000);
        else if (priceFilter === '50k - 100k') isPriceMatch = (cardPrice >= 50000 && cardPrice <= 100000);
        else if (priceFilter === '100k - 200k') isPriceMatch = (cardPrice >= 100000 && cardPrice <= 200000);
        else if (priceFilter === 'Over 200k') isPriceMatch = (cardPrice > 200000);

        if (isBrandMatch && isTypeMatch && isPriceMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });

    carCards.sort((cardA, cardB) => {
        const priceA = parseInt(cardA.getAttribute('data-price'), 10);
        const priceB = parseInt(cardB.getAttribute('data-price'), 10);
        const yearA = parseInt(cardA.getAttribute('data-year'), 10);
        const yearB = parseInt(cardB.getAttribute('data-year'), 10);

        if (sortType === 'price-asc') {
            return priceA - priceB; 
        } else if (sortType === 'age-asc') {
            return yearB - yearA; 
        } else {
            return 0; 
        }
    });

    carCards.forEach(card => resultsContainer.appendChild(card));
}

function showDetails(carId) {
    localStorage.setItem('selectedCar', carId);
    window.location.href = "car-detail.html";
}