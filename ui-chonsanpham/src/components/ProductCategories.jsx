import React, { useState, useEffect, useRef } from 'react';
import './ProductCategories.css';

const demoProducts = [
  // Mỹ phẩm
  { id: 101, name: 'Sữa rửa mặt Senka', brand: 'Senka', price: 99000, salePrice: 79000, giftPrice: 10000, rating: 4.7, reviewCount: 210, sold: 500, image: 'https://cdn.tgdd.vn/Products/Images/2514/238744/sua-rua-mat-senka-perfect-whip-120g-1-600x600.jpg', category: 'Mỹ phẩm' },
  { id: 102, name: 'Kem chống nắng Anessa', brand: 'Anessa', price: 350000, salePrice: 299000, giftPrice: 20000, rating: 4.8, reviewCount: 180, sold: 320, image: 'https://cdn.tgdd.vn/Products/Images/2514/238745/kem-chong-nang-anessa-60ml-1-600x600.jpg', category: 'Mỹ phẩm' },
  { id: 103, name: 'Son môi 3CE Velvet Lip Tint', brand: '3CE', price: 320000, salePrice: 259000, giftPrice: 15000, rating: 4.6, reviewCount: 150, sold: 280, image: 'https://cdn.tgdd.vn/Products/Images/2514/238746/son-moi-3ce-velvet-lip-tint-1-600x600.jpg', category: 'Mỹ phẩm' },
  { id: 104, name: 'Nước tẩy trang Bioderma', brand: 'Bioderma', price: 420000, salePrice: 369000, giftPrice: 25000, rating: 4.9, reviewCount: 220, sold: 410, image: 'https://cdn.tgdd.vn/Products/Images/2514/238747/nuoc-tay-trang-bioderma-500ml-1-600x600.jpg', category: 'Mỹ phẩm' },
  { id: 105, name: 'Mặt nạ giấy Mediheal', brand: 'Mediheal', price: 35000, salePrice: 29000, giftPrice: 5000, rating: 4.5, reviewCount: 90, sold: 150, image: 'https://cdn.tgdd.vn/Products/Images/2514/238748/mat-na-giay-mediheal-1-600x600.jpg', category: 'Mỹ phẩm' },
  { id: 106, name: 'Kem dưỡng ẩm Cetaphil', brand: 'Cetaphil', price: 250000, salePrice: 219000, giftPrice: 10000, rating: 4.7, reviewCount: 130, sold: 200, image: 'https://cdn.tgdd.vn/Products/Images/2514/238749/kem-duong-am-cetaphil-1-600x600.jpg', category: 'Mỹ phẩm' },
  { id: 107, name: 'Toner Klairs Supple Preparation', brand: 'Klairs', price: 320000, salePrice: 279000, giftPrice: 15000, rating: 4.8, reviewCount: 110, sold: 170, image: 'https://cdn.tgdd.vn/Products/Images/2514/238750/toner-klairs-supple-preparation-1-600x600.jpg', category: 'Mỹ phẩm' },
  { id: 108, name: 'Serum Timeless Vitamin C', brand: 'Timeless', price: 350000, salePrice: 299000, giftPrice: 20000, rating: 4.9, reviewCount: 140, sold: 210, image: 'https://cdn.tgdd.vn/Products/Images/2514/238751/serum-timeless-vitamin-c-1-600x600.jpg', category: 'Mỹ phẩm' },
  // Điện thoại
  { id: 1, name: 'iPhone 15 Pro', brand: 'Apple', price: 32990000, salePrice: 28990000, giftPrice: 1000000, rating: 4.8, reviewCount: 120, sold: 320, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  { id: 2, name: 'Galaxy S24 Ultra', brand: 'Samsung', price: 28990000, salePrice: 24990000, giftPrice: 800000, rating: 4.7, reviewCount: 98, sold: 210, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  { id: 3, name: 'OPPO Reno10', brand: 'OPPO', price: 12990000, salePrice: 10990000, giftPrice: 500000, rating: 4.5, reviewCount: 45, sold: 80, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  { id: 4, name: 'Xiaomi 13T', brand: 'Xiaomi', price: 10990000, salePrice: 9990000, giftPrice: 400000, rating: 4.6, reviewCount: 60, sold: 120, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  { id: 5, name: 'Vivo V29', brand: 'Vivo', price: 8990000, salePrice: 7990000, giftPrice: 300000, rating: 4.4, reviewCount: 30, sold: 50, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  { id: 6, name: 'Realme 11 Pro', brand: 'Realme', price: 7990000, salePrice: 6990000, giftPrice: 200000, rating: 4.3, reviewCount: 25, sold: 30, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  { id: 7, name: 'Nokia G22', brand: 'Nokia', price: 4990000, salePrice: 3990000, giftPrice: 100000, rating: 4.2, reviewCount: 20, sold: 10, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  { id: 8, name: 'Tecno Camon 20', brand: 'Tecno', price: 3990000, salePrice: 2990000, giftPrice: 50000, rating: 4.1, reviewCount: 15, sold: 5, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Điện thoại' },
  // Laptop
  { id: 9, name: 'MacBook Air M3', brand: 'Apple', price: 29990000, salePrice: 26990000, giftPrice: 1500000, rating: 4.9, reviewCount: 110, sold: 150, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  { id: 10, name: 'XPS 13', brand: 'Dell', price: 25990000, salePrice: 23990000, giftPrice: 1200000, rating: 4.6, reviewCount: 95, sold: 90, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  { id: 11, name: 'Asus ZenBook 14', brand: 'Asus', price: 19990000, salePrice: 17990000, giftPrice: 800000, rating: 4.5, reviewCount: 85, sold: 70, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  { id: 12, name: 'HP Pavilion 15', brand: 'HP', price: 16990000, salePrice: 14990000, giftPrice: 700000, rating: 4.4, reviewCount: 70, sold: 60, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  { id: 13, name: 'Lenovo ThinkPad X1', brand: 'Lenovo', price: 22990000, salePrice: 19990000, giftPrice: 900000, rating: 4.7, reviewCount: 90, sold: 110, image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  { id: 14, name: 'Acer Aspire 7', brand: 'Acer', price: 14990000, salePrice: 12990000, giftPrice: 600000, rating: 4.3, reviewCount: 40, sold: 40, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  { id: 15, name: 'MSI Modern 15', brand: 'MSI', price: 17990000, salePrice: 15990000, giftPrice: 800000, rating: 4.6, reviewCount: 55, sold: 80, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  { id: 16, name: 'Gigabyte G5', brand: 'Gigabyte', price: 18990000, salePrice: 16990000, giftPrice: 900000, rating: 4.4, reviewCount: 65, sold: 75, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Laptop' },
  // Máy tính bảng
  { id: 17, name: 'iPad Pro 2024', brand: 'Apple', price: 22990000, salePrice: 19990000, giftPrice: 700000, rating: 4.8, reviewCount: 75, sold: 90, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  { id: 18, name: 'Pad 6', brand: 'Xiaomi', price: 8990000, salePrice: 7990000, giftPrice: 300000, rating: 4.2, reviewCount: 20, sold: 10, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  { id: 19, name: 'Samsung Tab S9', brand: 'Samsung', price: 15990000, salePrice: 13990000, giftPrice: 600000, rating: 4.7, reviewCount: 85, sold: 70, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  { id: 20, name: 'Lenovo Tab M10', brand: 'Lenovo', price: 5990000, salePrice: 4990000, giftPrice: 100000, rating: 4.1, reviewCount: 10, sold: 5, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  { id: 21, name: 'Huawei MatePad 11', brand: 'Huawei', price: 9990000, salePrice: 8990000, giftPrice: 300000, rating: 4.3, reviewCount: 30, sold: 20, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  { id: 22, name: 'Surface Go 3', brand: 'Microsoft', price: 12990000, salePrice: 10990000, giftPrice: 500000, rating: 4.6, reviewCount: 65, sold: 40, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  { id: 23, name: 'Masstel Tab 10', brand: 'Masstel', price: 3990000, salePrice: 2990000, giftPrice: 50000, rating: 4.0, reviewCount: 5, sold: 2, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  { id: 24, name: 'Alcatel 3T 10', brand: 'Alcatel', price: 2990000, salePrice: 1990000, giftPrice: 30000, rating: 3.9, reviewCount: 8, sold: 3, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3fd8?auto=format&fit=crop&w=400&q=80', category: 'Máy tính bảng' },
  // Âm thanh
  { id: 25, name: 'JBL Charge 5', brand: 'JBL', price: 3200000, salePrice: 2900000, giftPrice: 100000, rating: 4.5, reviewCount: 50, sold: 150, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  { id: 26, name: 'AirPods Pro', brand: 'Apple', price: 5990000, salePrice: 4990000, giftPrice: 200000, rating: 4.7, reviewCount: 65, sold: 200, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  { id: 27, name: 'Sony WH-1000XM5', brand: 'Sony', price: 8990000, salePrice: 7990000, giftPrice: 300000, rating: 4.8, reviewCount: 80, sold: 180, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  { id: 28, name: 'Soundcore Life Q30', brand: 'Anker', price: 2290000, salePrice: 1990000, giftPrice: 100000, rating: 4.2, reviewCount: 20, sold: 25, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  { id: 29, name: 'Marshall Emberton', brand: 'Marshall', price: 4990000, salePrice: 3990000, giftPrice: 150000, rating: 4.3, reviewCount: 35, sold: 60, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  { id: 30, name: 'Bose QC45', brand: 'Bose', price: 7990000, salePrice: 6990000, giftPrice: 250000, rating: 4.6, reviewCount: 60, sold: 90, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  { id: 31, name: 'Sennheiser HD 450BT', brand: 'Sennheiser', price: 3990000, salePrice: 3490000, giftPrice: 100000, rating: 4.1, reviewCount: 10, sold: 5, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  { id: 32, name: 'Edifier W800BT', brand: 'Edifier', price: 1490000, salePrice: 1290000, giftPrice: 50000, rating: 4.0, reviewCount: 5, sold: 2, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', category: 'Âm thanh' },
  // Gia dụng
  { id: 33, name: 'Nồi chiên không dầu', brand: 'Lock&Lock', price: 2200000, salePrice: 1900000, giftPrice: 70000, rating: 4.5, reviewCount: 50, sold: 100, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
  { id: 34, name: 'Dyson V15 Detect', brand: 'Dyson', price: 15990000, salePrice: 13990000, giftPrice: 600000, rating: 4.7, reviewCount: 65, sold: 80, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
  { id: 35, name: 'Máy lọc không khí Sharp', brand: 'Sharp', price: 4990000, salePrice: 3990000, giftPrice: 150000, rating: 4.3, reviewCount: 40, sold: 30, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
  { id: 36, name: 'Robot hút bụi Ecovacs', brand: 'Ecovacs', price: 7990000, salePrice: 6990000, giftPrice: 250000, rating: 4.6, reviewCount: 55, sold: 70, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
  { id: 37, name: 'Máy ép chậm Kalite', brand: 'Kalite', price: 3990000, salePrice: 3490000, giftPrice: 100000, rating: 4.2, reviewCount: 25, sold: 20, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
  { id: 38, name: 'Bếp từ Sunhouse', brand: 'Sunhouse', price: 2490000, salePrice: 1990000, giftPrice: 80000, rating: 4.1, reviewCount: 15, sold: 10, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
  { id: 39, name: 'Quạt điều hòa Midea', brand: 'Midea', price: 2990000, salePrice: 2490000, giftPrice: 100000, rating: 4.0, reviewCount: 10, sold: 5, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
  { id: 40, name: 'Máy xay sinh tố Philips', brand: 'Philips', price: 1290000, salePrice: 990000, giftPrice: 50000, rating: 4.3, reviewCount: 35, sold: 25, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', category: 'Gia dụng' },
];

function groupByCategory(products) {
  const map = {};
  products.forEach((p) => {
    if (!map[p.category]) map[p.category] = [];
    map[p.category].push(p);
  });
  return map;
}

function formatVND(num) {
  return num.toLocaleString('vi-VN') + '₫';
}

function renderStars(rating) {
  return (
    <span className="star-rating">★</span>
  );
}

// Đồng hồ đếm ngược thời gian còn lại khuyến mãi
function CountdownTimer({ endTime }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const diff = endTime - now;
    if (diff <= 0) return { h: '00', m: '00', s: '00', ended: true };
    const h = String(Math.floor(diff / 1000 / 60 / 60)).padStart(2, '0');
    const m = String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0');
    const s = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
    return { h, m, s, ended: false };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [endTime]);

  if (timeLeft.ended) return <span className="promo-timer-ended">Hết khuyến mãi</span>;
  return (
    <span className="promo-timer">
      <span className="promo-timer-label">Kết thúc sau:</span>
      <span className="promo-timer-count">{timeLeft.h}:{timeLeft.m}:{timeLeft.s}</span>
    </span>
  );
}

// Các loại tab cho khuyến mãi online
const promoTabs = [
  { key: 'active', label: 'Đang diễn ra', filter: p => p.promoStatus === 'active' },
  { key: 'upcoming', label: 'Sắp diễn ra', filter: p => p.promoStatus === 'upcoming' },
  { key: 'ended', label: 'Đã kết thúc', filter: p => p.promoStatus === 'ended' },
];

// Thêm trạng thái khuyến mãi cho demoProducts
const demoProductsWithStatus = demoProducts.map((p, idx) => {
  if (idx % 8 === 0) return { ...p, promoStatus: 'upcoming' };
  if (idx % 7 === 0) return { ...p, promoStatus: 'ended' };
  return { ...p, promoStatus: 'active' };
});

// Banner quảng cáo dành cho nhà quảng cáo
function AdBanner() {
  return (
    <div className="ad-banner">
      <div className="ad-banner-content">
        <div className="ad-banner-text">
          <span className="ad-badge">Đối tác quảng cáo</span>
          <div className="ad-title">Quảng bá thương hiệu của bạn trên Chọn Sản Phẩm!</div>
          <div className="ad-desc">
            Đưa sản phẩm của bạn đến hàng ngàn khách hàng tiềm năng mỗi ngày với vị trí banner nổi bật, thiết kế hiện đại, hiệu ứng bắt mắt và tỷ lệ chuyển đổi cao.
          </div>
          <a className="ad-cta" href="#" target="_blank" rel="noopener noreferrer">
            Đăng ký hợp tác & quảng cáo ngay
          </a>
        </div>
        <div className="ad-banner-img">
          <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80" alt="Business Partnership" />
        </div>
      </div>
    </div>
  );
}

export default function ProductCategories({ setCartCount, categories }) {
  const [visible, setVisible] = useState(() => {
    const obj = {};
    Object.keys(groupByCategory(demoProducts)).forEach(cat => { obj[cat] = 4; });
    return obj;
  });
  const [promoTab, setPromoTab] = useState('active');
  const promoProducts = demoProductsWithStatus.filter(p => p.salePrice < p.price);
  const promoRowRef = useRef(null);

  // Lọc sản phẩm theo tab
  const promoTabObj = promoTabs.find(tab => tab.key === promoTab);
  const filteredPromoProducts = promoProducts.filter(promoTabObj?.filter || (() => true));

  // Nếu tab 'Đang diễn ra' thì show 1 dòng 5 sản phẩm, 'Sắp diễn ra' và 'Đã kết thúc' cũng 1 dòng 5 sản phẩm
  const promoProductsToShow = filteredPromoProducts.slice(0, 5);

  // Thời gian kết thúc khuyến mãi (ví dụ: 23:59 hôm nay)
  const promoEndTime = new Date();
  promoEndTime.setHours(23, 59, 59, 999);

  // Sắp diễn ra (ví dụ: 8:00 sáng mai)
  const promoUpcomingTime = new Date();
  promoUpcomingTime.setDate(promoUpcomingTime.getDate() + 1);
  promoUpcomingTime.setHours(8, 0, 0, 0);

  return (
    <div className="categories-page">
      <AdBanner />
      <div className="promo-online-wrapper">
        <div className="promo-online-title">Khuyến mãi Online</div>
        <div className="promo-tabs">
          {promoTabs.map(tab => (
            <button
              key={tab.key}
              className={promoTab === tab.key ? 'promo-tab active' : 'promo-tab'}
              onClick={() => setPromoTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="promo-timer-row">
          {promoTab === 'active' && <CountdownTimer endTime={promoEndTime} />}
          {promoTab === 'upcoming' && <span className="promo-upcoming">Bắt đầu lúc: <span className="promo-upcoming-time">{promoUpcomingTime.getHours()}:00 ngày {promoUpcomingTime.getDate()}/{promoUpcomingTime.getMonth() + 1}</span></span>}
          {promoTab === 'ended' && <span className="promo-timer-ended">Khuyến mãi đã kết thúc</span>}
        </div>
        <div className="promo-online-row-wrapper">
          <button className="promo-scroll-btn left" onClick={() => {
            if (promoRowRef.current) promoRowRef.current.scrollBy({ left: -320, behavior: 'smooth' });
          }} aria-label="Xem trái">
            &#8592;
          </button>
          <div className="promo-online-row" ref={promoRowRef}>
            {promoProductsToShow.map((product) => {
              // Tổng suất lấy theo product.stock nếu có, mặc định 10
              const totalStock = typeof product.stock === 'number' ? product.stock : 10;
              const sold = typeof product.sold === 'number' ? Math.min(product.sold, totalStock) : 0;
              const left = Math.max(0, totalStock - sold);
              const percent = Math.round(100 - (product.salePrice / product.price) * 100);
              return (
                <div className="category-product-card" key={product.id}>
                  <div className="category-product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="category-product-info">
                    <div className="category-product-brand">{product.brand}</div>
                    <div className="category-product-name">{product.name}</div>
                    <div className="category-product-prices">
                      <span className="listed-price">{formatVND(product.price)}</span>
                      <span className="sale-price">{formatVND(product.salePrice)}</span>
                      <span className="discount">-{percent}%</span>
                    </div>
                    <div className="category-product-gift">Còn lại <span>{left}</span>/<span>{totalStock}</span> suất</div>
                    <button className="add-to-cart-btn" onClick={() => setCartCount(c => c + 1)}>Mua ngay</button>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="promo-scroll-btn right" onClick={() => {
            if (promoRowRef.current) promoRowRef.current.scrollBy({ left: 320, behavior: 'smooth' });
          }} aria-label="Xem phải">
            &#8594;
          </button>
        </div>
      </div>
      <h2 className="categories-title">Danh mục sản phẩm</h2>
      {categories.map((cat) => {
        const products = groupByCategory(demoProducts)[cat] || [];
        return (
          <div className="category-block" key={cat}>
            <h3 className="category-name">
              {cat}
              <button className="filter-btn" title="Lọc sản phẩm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Lọc">
                  <path d="M3 5h18M6 9l6 8 6-8" stroke="#ff7e29" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="10.5" y="17" width="3" height="2" rx="1" fill="#ffb366"/>
                </svg>
              </button>
            </h3>
            <div className="category-products-grid">
              {products.length > 0 ? (
                products.slice(0, visible[cat] || 4).map((product) => {
                  const percent = Math.round(100 - (product.salePrice / product.price) * 100);
                  return (
                    <div className="category-product-card" key={product.id}>
                      <div className="category-product-image" style={{position: 'relative'}}>
                        <img src={product.image} alt={product.name} />
                        <div className="installment-badge" style={{position: 'absolute', top: 6, right: 6, background: '#f60', color: '#fff', fontWeight: 600, fontSize: 12, borderRadius: 4, padding: '2px 8px', zIndex: 3}}>Trả góp 0%</div>
                      </div>
                      <div className="category-product-info">
                        <div className="category-product-brand">{product.brand}</div>
                        <div className="category-product-name">{product.name}</div>
                        <div className="category-product-rating">
                          {renderStars(product.rating)}
                          <span className="rating-number">{product.rating}</span>
                          <span className="review-count">({product.reviewCount} đánh giá)</span>
                          <span className="sold-count">| Đã bán: {product.sold}</span>
                        </div>
                        <div className="category-product-prices">
                          <span className="listed-price">{formatVND(product.price)}</span>
                          <span className="sale-price">{formatVND(product.salePrice)}</span>
                          <span className="discount">-{percent}%</span>
                        </div>
                        <div className="category-product-gift">Quà tặng: <span className="gift-price">{formatVND(product.giftPrice)}</span></div>
                        <button className="add-to-cart-btn" onClick={() => setCartCount(c => c + 1)}>Thêm vào giỏ</button>
                      </div>
                      <div className="referral-badge" style={{margin: '10px 0 0 0', background: '#2a9d8f', color: '#fff', fontWeight: 600, fontSize: 12, borderRadius: 4, padding: '2px 8px', textAlign: 'center', width: 'fit-content'}}>Giới thiệu bạn mua có hoa hồng</div>
                    </div>
                  );
                })
              ) : (
                <div className="no-products">Chưa có sản phẩm</div>
              )}
            </div>
            {products.length > 0 && visible[cat] < products.length && (
              <button
                className="add-to-cart-btn"
                style={{marginTop: 18}}
                onClick={() => setVisible(v => ({ ...v, [cat]: Math.min((v[cat] || 4) + 4, products.length) }))}
              >
                Xem thêm
                <span style={{ marginLeft: 8, color: '#888', fontSize: 13 }}>
                  (Còn {products.length - (visible[cat] || 4)} sản phẩm)
                </span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
