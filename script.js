document.addEventListener('DOMContentLoaded', () => {
    // 取得所有圖片元素
    const images = document.querySelectorAll('.image-card img');

    // 為每個圖片添加載入錯誤處理
    images.forEach(img => {
        img.addEventListener('error', function() {
            // 如果圖片載入失敗，使用備用圖片
            this.src = 'https://via.placeholder.com/800x600?text=圖片載入失敗';
        });

        // 添加載入動畫效果
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });

    // 為圖片卡片添加點擊事件，可以放大查看
    const imageCards = document.querySelectorAll('.image-card');
    imageCards.forEach(card => {
        card.addEventListener('click', function() {
            const img = this.querySelector('img');
            window.open(img.src, '_blank');
        });
    });
}); 