import React, { useState, useEffect } from 'react';
import './TopMenu.css';
import tiktokLogo from '../assets/shop-logos/tiktok.png';
import lazadaLogo from '../assets/shop-logos/lazada.png';
import shopeeLogo from '../assets/shop-logos/shopee.png';
import logochosanpham from '../assets/logochosanpham.png';

export default function TopMenu({ cartCount = 0, onShowFlashDeal, onShowLogin, phoneNumber }) {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showDealPopup, setShowDealPopup] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
      if (window.scrollY > 0 && !showDealPopup && !hasShownPopup) {
        setShowDealPopup(true);
        setHasShownPopup(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showDealPopup, hasShownPopup]);

  const handleSearch = () => {
    if (searchValue.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchValue.trim())}`;
    }
  };

  return (
    <>
      <div className="submenu-topright">
        <div className="submenu-hotline">
          <span className="hotline-icon">📞</span>
          Hotline: <a href="tel:0938 456 460">0938 456 460</a>
        </div>
        <div className="shop-links">
          <a className="shop-link" href="#" title="Tiktok Shop">
            <img src={tiktokLogo} alt="Tiktok" className="shop-icon-img" /> Tiktok Shop
          </a>
          <a className="shop-link" href="#" title="Lazada Shop">
            <img src={lazadaLogo} alt="Lazada" className="shop-icon-img" /> Lazada Shop
          </a>
          <a className="shop-link" href="#" title="Shopee Shop">
            <img src={shopeeLogo} alt="Shopee" className="shop-icon-img" /> Shopee Shop
          </a>
        </div>
      </div>
      <div className={`top-menu${isSticky ? ' sticky' : ''}`}>
        <div className="top-menu-left">
          {isSticky && (
            <img src={logochosanpham} alt="Topper Shop" className="topper-logo" style={{height:38,marginRight:16,borderRadius:12,background:'#fff',boxShadow:'0 2px 8px #22336b11'}} />
          )}
          {showDealPopup && (
            <div className="deal-popup">
              <button className="deal-btn deal-btn-popup">
                <span style={{display:'flex',alignItems:'center'}}>
                  <i className="fa-solid fa-bolt" style={{marginRight:8,color:'#ff7e29',fontSize:28}}></i>
                  <span style={{fontSize: '1.45em', fontWeight: 900}}>Săn deal giờ vàng</span>
                  <span className="deal-count-badge" style={{marginLeft:12}}>12</span>
                </span>
                <span className="deal-datetime" style={{fontSize:'1em',marginLeft:36}}>12:00 - 14:00, 30/09/2025</span>
              </button>
              <button className="close-popup-btn" onClick={() => setShowDealPopup(false)} title="Đóng">×</button>
              <button
                className="deal-link-btn"
                style={{
                  marginTop: 16,
                  background: 'linear-gradient(90deg,#22336b 0%,#e53935 80%)',
                  color: '#fff',
                  fontWeight: 800,
                  padding: '13px 32px 13px 22px',
                  border: 'none',
                  borderRadius: 16,
                  cursor: 'pointer',
                  fontSize: '1.18em',
                  boxShadow: '0 4px 18px #22336b33, 0 2px 8px #e5393522',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  letterSpacing: 1,
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.18s',
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'scale(1.04)'}
                onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                onClick={() => {
                  setShowDealPopup(false);
                  if (typeof onShowFlashDeal === 'function') onShowFlashDeal();
                }}
              >
                <span style={{fontSize:'2.1em',marginRight:10,display:'flex',alignItems:'center',filter:'drop-shadow(0 0 8px #fffbe6)'}}>
                  <img src="https://cdn-icons-png.flaticon.com/512/3212/3212608.png" alt="spaceship" style={{width:38,height:38,verticalAlign:'middle',marginRight:2,animation:'flyShip 1.2s infinite alternate'}} />
                </span>
                <span style={{fontWeight:900,letterSpacing:1.2,fontSize:'1.13em',textShadow:'0 2px 8px #22336b55'}}>Xem sản phẩm deal giờ vàng</span>
                <style>{`@keyframes flyShip { 0%{transform:translateY(0) scale(1);} 100%{transform:translateY(-8px) scale(1.08);} }`}</style>
              </button>
            </div>
          )}
          <button className="menu-link deal-btn" style={{marginRight:12,background:'#ffb366',color:'#232a32',fontWeight:700,position:'relative',display:'flex',flexDirection:'column',alignItems:'flex-start',lineHeight:1.1}} onClick={onShowFlashDeal}>
            <span style={{display:'flex',alignItems:'center'}}>
              <i className="fa-solid fa-bolt" style={{marginRight:6,color:'#ff7e29'}}></i>
              Săn deal giờ vàng
              <span className="deal-count-badge">12</span>
            </span>
            <span className="deal-datetime">12:00 - 14:00, 30/09/2025</span>
          </button>
          <div className="search-input-wrapper">
            <input
              type="text"
              placeholder="Tìm kiếm sản phẩm..."
              className="search-input"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSearch(); }}
            />
            <button className="search-icon-btn" onClick={handleSearch} tabIndex={0} aria-label="Tìm kiếm">
              <span className="search-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-label="Tìm kiếm">
                  <circle cx="9" cy="9" r="7" stroke="#888" strokeWidth="2" fill="none"/>
                  <line x1="14.2" y1="14.2" x2="18" y2="18" stroke="#888" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <button className="hamburger" onClick={() => setOpen(o => !o)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="top-menu-right" style={{ display: open ? 'flex' : undefined }}>
          {phoneNumber ? (
            <div className="logged-in-user" style={{
              display: 'flex', alignItems: 'center', fontWeight: 700, color: '#22336b', background: '#fffbe6', borderRadius: 16, padding: '6px 18px', marginRight: 12, fontSize: '1.08em', boxShadow: '0 2px 8px #22336b11', letterSpacing: 0.5
            }}>
              <span style={{marginRight:8,display:'flex',alignItems:'center'}}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-label="iPhone">
                  <circle cx="12" cy="12" r="12" fill="#fffbe6" stroke="#ffb366" strokeWidth="1.5"/>
                  <rect x="7.5" y="4" width="9" height="16" rx="2.5" fill="#fff" stroke="#ff7e29" strokeWidth="1.3"/>
                  <rect x="11" y="5.2" width="2" height="0.7" rx="0.3" fill="#ffb366"/>
                  <circle cx="12" cy="18.5" r="0.7" fill="#ffb366"/>
                </svg>
              </span>
              {`Chào mừng ...${phoneNumber.slice(-3)}`}
            </div>
          ) : (
            <button className="btn phone-btn" onClick={onShowLogin}>
              <span className="phone-icon-wrapper">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-label="iPhone">
                  <circle cx="12" cy="12" r="12" fill="#fffbe6" stroke="#ffb366" strokeWidth="1.5"/>
                  <rect x="7.5" y="4" width="9" height="16" rx="2.5" fill="#fff" stroke="#ff7e29" strokeWidth="1.3"/>
                  <rect x="11" y="5.2" width="2" height="0.7" rx="0.3" fill="#ffb366"/>
                  <circle cx="12" cy="18.5" r="0.7" fill="#ffb366"/>
                </svg>
              </span>
              Đăng nhập mua hàng
            </button>
          )}
          <button className="cart-btn">
            <span className="cart-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-label="Giỏ hàng">
                <circle cx="12" cy="12" r="12" fill="#fffbe6" stroke="#ffb366" strokeWidth="1.5"/>
                <path d="M7 7h1.5l1.2 7.2a1 1 0 0 0 1 .8h4.8a1 1 0 0 0 1-.8l1.2-6H8.2" stroke="#ff7e29" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="10" cy="18" r="1.2" fill="#ff7e29"/>
                <circle cx="16" cy="18" r="1.2" fill="#ff7e29"/>
              </svg>
              {cartCount > 0 && (
                <span className="cart-count-badge">{cartCount}</span>
              )}
            </span>
            Giỏ hàng
          </button>
        </div>
      </div>
    </>
  );
}
