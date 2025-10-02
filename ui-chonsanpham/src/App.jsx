import TopMenu from './components/TopMenu';
import CategoryTicker from './components/CategoryTicker';
import './App.css';
import React, { useState } from 'react';
import FlashDealModal from './components/FlashDealModal';
import flashDealProducts from './data/flashDealProducts';
import Login from './Login';

const categories = [
  'Điện thoại', 'Laptop', 'Máy tính bảng', 'Mỹ phẩm', 'Đồng hồ', 'Sản phẩm sức khỏe', 'Ăn vặt sinh viên', 'Gia dụng', 'Camera', 'Đồ chơi', 'Thời trang', 'Mẹ & Bé', 'Sách', 'Khác'
];
import Banner from './components/Banner';
import ProductCategories from './components/ProductCategories';
import Footer from './components/Footer';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [showFlashDeal, setShowFlashDeal] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  // Tạo thời gian kết thúc deal - ví dụ: 2 giờ từ bây giờ
  const dealEndTime = new Date(Date.now() + 2 * 60 * 60 * 1000); // 2 giờ nữa

  const handleLogin = (phone) => {
    setPhoneNumber(phone);
    setShowLogin(false);
  };

  return (
    <div>
      <Banner />
      <TopMenu 
        cartCount={cartCount} 
        onShowFlashDeal={() => setShowFlashDeal(true)} 
        onShowLogin={() => setShowLogin(true)}
        phoneNumber={phoneNumber}
      />
      <CategoryTicker categories={categories} />
      <ProductCategories setCartCount={setCartCount} categories={categories} />
      <FlashDealModal 
        open={showFlashDeal} 
        onClose={() => setShowFlashDeal(false)} 
        products={flashDealProducts}
        dealEndTime={dealEndTime}
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
      {showLogin && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.18)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Login onLogin={handleLogin} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
