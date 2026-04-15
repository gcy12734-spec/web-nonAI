function handleBuy() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (!isLoggedIn) {
        const goLogin = confirm("购买车辆需要先登录买家/卖家账号。是否立即前往登录？");
        if (goLogin) {
            window.location.href = "log-in.html";
        }
    } else {
        alert("已记录您的购买意向，销售人员稍后将与您联系。");
    }
}