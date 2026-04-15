const carDatabase = {
    'car1': {
        title: 'Tesla Model 3 - 2022',
        price: '¥ 185,000',
        date: 'May 2022',
        mileage: '15,000 km',
        location: 'Beijing',
        type: 'Electric',
        image: 'images/car1.jpg' 
    },
    'car2': {
        title: 'BMW 3 Series - 2021',
        price: '¥ 210,000',
        date: 'Aug 2021',
        mileage: '32,000 km',
        location: 'Shanghai',
        type: 'Petrol',
        image: 'images/car2.jpg'
    },
    'car3': {
        title: 'Porsche Macan - 2020',
        price: '¥ 450,000',
        date: 'Nov 2020',
        mileage: '45,000 km',
        location: 'Guangzhou',
        type: 'Petrol',
        image: 'images/car3.jpg'
    },
    'car4': {
        title: 'BYD Han - 2023',
        price: '¥ 205,000',
        date: 'Feb 2023',
        mileage: '8,000 km',
        location: 'Shenzhen',
        type: 'Hybrid',
        image: 'images/car4.jpg'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const selectedCarId = localStorage.getItem('selectedCar');

    if (selectedCarId && carDatabase[selectedCarId]) {
        const carData = carDatabase[selectedCarId];

        const imgContainer = document.getElementById('carImageContainer');
        //点击触发放大功能
        imgContainer.innerHTML = `<img src="${carData.image}" alt="${carData.title}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;" onclick="openModal(this.src)">`;

        document.getElementById('carTitle').innerText = carData.title;
        document.getElementById('carPrice').innerText = carData.price;
        document.getElementById('carDate').innerText = carData.date;
        document.getElementById('carMileage').innerText = carData.mileage;
        document.getElementById('carLocation').innerText = carData.location;
        document.getElementById('carType').innerText = carData.type;
    } else {
        document.getElementById('carTitle').innerText = "Car not found";
        alert("Failed to get car data. Returning to search page.");
        window.location.href = "search.html";
    }
});

function handleBuy() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        const goLogin = confirm("You need to login to buy a car. Go to login page now?");
        if (goLogin) {
            window.location.href = "log-in.html";
        }
    } else {
        alert("Your purchase intent has been recorded. Our sales team will contact you shortly.");
    }
}

// 全屏查看大图功能 ( Modal 控制)
// 打开大图：接收被点击图片的路径
function openModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    
    modal.style.display = "flex"; 
    fullImage.src = imageSrc;
}

// 关闭大图
function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.style.display = "none"; 
}