import React from 'react';
import './Footer.css';

// FontAwesome icons (bạn cần cài fontawesome hoặc dùng svg ngoài)
const icons = {
  fb: <i className="fa-brands fa-facebook-f" aria-label="Facebook" />,
  yt: <i className="fa-brands fa-youtube" aria-label="YouTube" />,
  ig: <i className="fa-brands fa-instagram" aria-label="Instagram" />,
  zalo: (
    <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-label="Zalo">
      <circle cx="16" cy="16" r="16" fill="#008fe5" />
      <text x="8" y="22" fontSize="13" fill="#fff">Zalo</text>
    </svg>
  ),
  visa: <i className="fa-brands fa-cc-visa icon" aria-label="Visa" />,
  master: <i className="fa-brands fa-cc-mastercard icon" aria-label="Mastercard" />,
  momo: (
    <img
      src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png"
      alt="Momo"
      style={{ height: 18, width: 18, borderRadius: 4, background: '#fff', padding: 2, boxShadow: '0 1px 4px 0 rgba(0,0,0,0.06)' }}
    />
  ),
  zalopay: (
    <svg width="38" height="18" viewBox="0 0 76 36" fill="none" aria-label="ZaloPay" style={{verticalAlign:'middle'}}>
      <rect width="76" height="36" rx="8" fill="#fff"/>
      <text x="10" y="24" fontSize="18" fontWeight="bold" fill="#008fe5" fontFamily="Arial,Segoe UI,sans-serif">Zalo</text>
      <text x="44" y="24" fontSize="18" fontWeight="bold" fill="#00c389" fontFamily="Arial,Segoe UI,sans-serif">Pay</text>
    </svg>
  ),
};

export default function Footer() {
  return (
    <footer className="footer">
      {/* Dòng 1 */}
      <div className="footer-row footer-row-1">
        <div className="footer-col footer-col-left">
          <span className="footer-title">Hệ thống Topper Shop trên toàn quốc</span>
        </div>
        <div className="footer-col footer-col-right">
          <button className="footer-store-btn">Xem danh sách cửa hàng</button>
        </div>
      </div>
      {/* Dòng 2 */}
      <div className="footer-row footer-row-2">
        <div className="footer-col">
          <div className="footer-heading">
            <span style={{display:'inline-flex',alignItems:'center',marginRight:8}}>
              <i className="fa-solid fa-link" style={{color:'#ffb366',fontSize:18,marginRight:4}} aria-label="Kết nối" />
            </span>
            Kết nối với Topper Shop
          </div>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon fb" aria-label="Facebook">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#1877f3"/><path d="M21 16.5h-3v8h-3v-8h-2v-3h2v-2c0-2.2 1.3-3.5 3.5-3.5h2.5v3h-2c-.5 0-.5.2-.5.5v2h2.5l-.5 3z" fill="#fff"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon yt" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#ff0000"/><polygon points="13,11 23,16 13,21" fill="#fff"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon ig" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none"><radialGradient id="ig1" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#f9ce34"/><stop offset="45%" stop-color="#ee2a7b"/><stop offset="100%" stop-color="#6228d7"/></radialGradient><circle cx="16" cy="16" r="16" fill="url(#ig1)"/><rect x="10" y="10" width="12" height="12" rx="4" fill="#fff"/><circle cx="16" cy="16" r="3" fill="#ee2a7b"/><circle cx="21" cy="11" r="1" fill="#ee2a7b"/></svg>
            </a>
            <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="footer-social-icon zalo" aria-label="Zalo">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#008fe5"/><text x="8" y="22" fontSize="13" fill="#fff">Zalo</text></svg>
            </a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Về chúng tôi</div>
          <ul className="footer-links">
            <li><a href="#">Giới thiệu</a></li>
            <li><a href="#">Tuyển dụng</a></li>
            <li><a href="#">Tin tức</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Chính sách</div>
          <ul className="footer-links">
            <li><a href="#">Bảo hành</a></li>
            <li><a href="#">Đổi trả</a></li>
            <li><a href="#">Giao hàng</a></li>
            <li><a href="#">Bảo mật</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <div className="footer-heading">Hỗ trợ thanh toán</div>
          <div className="footer-payments">
            <span className="footer-payment-icon visa">{icons.visa} Visa</span>
            <span className="footer-payment-icon master">{icons.master} Master</span>
            <span className="footer-payment-icon momo">{icons.momo} Momo</span>
            <span className="footer-payment-icon zalopay">{icons.zalopay} ZaloPay</span>
          </div>
        </div>
      </div>
      {/* Dòng 3 */}
      <div className="footer-row footer-row-3">
        <span>Các website khác cùng hệ thống: </span>
        <a href="#" className="footer-other-site">TopperMobile.vn</a>
        <a href="#" className="footer-other-site">TopperHome.vn</a>
        <a href="#" className="footer-other-site">TopperAudio.vn</a>
      </div>
      {/* Dòng 4 */}
      <div className="footer-row footer-row-4">
        <span>© 2025 Topper Shop. Bản quyền thuộc về Topper Group.</span>
      </div>
    </footer>
  );
}
