import React from 'react';
import logo from '../assets/logochosanpham.png';
import './Banner.css';

export default function Banner() {
  return (
    <div className="main-banner split-banner">
      <div className="banner-col banner-logo-col">
        <img src={logo} alt="Logo" className="banner-logo" />
      </div>
      <div className="banner-col banner-content-col">
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h1>Chào mừng đến với MuaGiDay.vn</h1>
          <p>Ưu đãi cực sốc cho học sinh, sinh viên - Mua sắm thả ga, giá siêu rẻ!</p>
        </div>
      </div>
    </div>
  );
}
