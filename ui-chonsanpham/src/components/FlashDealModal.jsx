import React, { useEffect, useState } from 'react';
import './FlashDealModal.css';

const FlashDealModal = ({ open, onClose, products, dealEndTime, cartCount = 0, setCartCount }) => {
  if (!open) return null;


  // Mỗi sản phẩm có 1 đồng hồ đếm ngược riêng (ví dụ: 10 phút cho mỗi sản phẩm)
  // Lấy thời gian deal riêng cho từng sản phẩm
  const initialTimes = products.map(p => p.dealSeconds || 600);
  const [productTimes, setProductTimes] = useState(initialTimes);
  // Thêm state lưu danh sách sản phẩm còn hiển thị
  const [visibleProducts, setVisibleProducts] = useState(products.map((_, idx) => true));
  // Đếm ngược 60s sau khi deal kết thúc
  const [removeTimers, setRemoveTimers] = useState(products.map(() => 60));
  // State kiểm soát đã bấm thêm 30s cho từng sản phẩm
  const [added30s, setAdded30s] = useState(products.map(() => false));

  // Reset khi products thay đổi
  useEffect(() => {
    setProductTimes(products.map(p => p.dealSeconds || 600));
    setVisibleProducts(products.map(() => true));
    setRemoveTimers(products.map(() => 60));
    setAdded30s(products.map(() => false));
  }, [products]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProductTimes(times => times.map(t => (t > 0 ? t - 1 : 0)));
      setRemoveTimers((prev) => prev.map((r, idx) => {
        // Nếu sản phẩm đã hết deal và vẫn còn hiển thị, giảm removeTimer
        if (productTimes[idx] === 0 && visibleProducts[idx] && r > 0) return r - 1;
        return r;
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, [products.length, productTimes, visibleProducts]);

  // Khi removeTimer về 0, ẩn sản phẩm
  useEffect(() => {
    setVisibleProducts((prev) => prev.map((v, idx) => {
      if (productTimes[idx] === 0 && removeTimers[idx] === 0) return false;
      return v;
    }));
    // eslint-disable-next-line
  }, [removeTimers, productTimes]);

  // State cho stock động
  const [stockArr, setStockArr] = useState(products.map(p => p.stock ?? 0));

  useEffect(() => {
    setStockArr(products.map(p => p.stock ?? 0));
  }, [products]);

  return (
    <div className="flashdeal-modal-overlay" onClick={onClose}>
      <div className="flashdeal-modal" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} style={{
          position: 'absolute',
          top: 10,
          right: 14,
          zIndex: 10,
          background: 'rgba(255,255,255,0.95)',
          border: 'none',
          fontSize: '2rem',
          cursor: 'pointer',
          color: '#e53935',
          width: 38,
          height: 38,
          borderRadius: '50%',
          boxShadow: '0 2px 8px #e5393522',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.18s',
        }}>&times;</button>
        <div style={{
          fontWeight: 900,
          fontSize: '1.35rem',
          color: '#fff',
          textAlign: 'left',
          marginBottom: 18,
          letterSpacing: 1,
          textTransform: 'uppercase',
          background: 'linear-gradient(90deg,#e53935 0%,#ffb366 100%)',
          padding: '8px 22px',
          borderRadius: '10px',
          boxShadow: '0 4px 18px #e5393522',
          borderLeft: '7px solid #e53935',
          display: 'inline-block',
          textShadow: '0 2px 8px #e5393555',
        }}>
          <span style={{fontSize:'1.3em',marginRight:8,verticalAlign:'middle'}}>🔥</span>GIÁ KHÔNG THỂ RẺ HƠN
        </div>
        {/* Giỏ hàng trong popup */}
        <div style={{display:'flex',alignItems:'center',justifyContent:'flex-end',marginBottom:12}}>
          <span style={{fontWeight:600,marginRight:8}}>Giỏ hàng:</span>
          <span style={{fontSize:'1.5rem',marginRight:4}}>🛒</span>
          <span style={{fontWeight:700,fontSize:'1.1rem',color:'#e53935',minWidth:24,display:'inline-block',textAlign:'center'}}>{cartCount}</span>
        </div>
        <div className="flashdeal-products">
          {products.map((product, idx) => {
            if (!visibleProducts[idx]) return null;
            // Tính toán thời gian còn lại
            const t = productTimes[idx];
            const h = String(Math.floor(t/3600)).padStart(2,'0');
            const m = String(Math.floor((t%3600)/60)).padStart(2,'0');
            const s = String(t%60).padStart(2,'0');
            const minPrice = product.flashPrice;
            const maxPrice = product.oldPrice;
            const percent = t / (product.dealSeconds || 600);
            const dynamicPrice = Math.round(minPrice + (maxPrice - minPrice) * (1 - percent));
            const ended = t === 0;
            const stock = stockArr[idx];
            return (
              <div className="flashdeal-product-card" key={product.id} style={{
                border: 'none', // Bỏ viền
                boxShadow: '0 6px 32px #ffb36644, 0 2px 12px #22336b11',
              }}>
                <div className="flashdeal-product-card-imgwrap">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <span className="discount-badge">-{Math.round(100 - dynamicPrice / product.oldPrice * 100)}%</span>
                  <div className="flashdeal-title-row">
                    <span className="flashdeal-product-title">{product.name}</span>
                  </div>
                  <div style={{marginBottom: 6, fontSize: '0.98rem', color: '#22336b', fontWeight: 600}}>
                    <span>🛒</span> Còn lại: <span style={{color:'#e53935',fontWeight:700}}>{stock}</span>
                  </div>
                  <div className="price-row">
                    <span className="flashdeal-price">{dynamicPrice.toLocaleString()}₫</span>
                    <span className="old-price">{product.oldPrice.toLocaleString()}₫</span>
                  </div>
                  <div className={`countdown-container ${t < 60 ? 'urgent' : ''}`} style={{marginBottom: 8}}>
                    <div className="countdown-box">
                      <span className="countdown-number">{h}</span>
                      <span className="countdown-label">Giờ</span>
                    </div>
                    <span className="countdown-separator">:</span>
                    <div className="countdown-box">
                      <span className="countdown-number">{m}</span>
                      <span className="countdown-label">Phút</span>
                    </div>
                    <span className="countdown-separator">:</span>
                    <div className="countdown-box">
                      <span className="countdown-number">{s}</span>
                      <span className="countdown-label">Giây</span>
                    </div>
                  </div>
                  {ended && (
                    <div className="deal-ended-notice">
                      ⚡ Deal đã kết thúc!<br/>
                      <span style={{fontSize: '0.85em', color: '#888'}}>Sản phẩm sẽ tự xóa sau {removeTimers[idx]}s</span>
                      {!added30s[idx] && (
                        <button 
                          style={{marginTop:8,background:'#ffb366',color:'#fff',border:'none',borderRadius:8,padding:'6px 18px',fontWeight:700,cursor:'pointer'}} 
                          onClick={() => {
                            setProductTimes(times => times.map((time, i) => i === idx ? time + 30 : time));
                            setAdded30s(arr => arr.map((v, i) => i === idx ? true : v));
                          }}
                        >
                          Thêm 30s để mua hàng
                        </button>
                      )}
                      {added30s[idx] && <div style={{color:'#e53935',fontWeight:600,marginTop:4}}>Đã cộng thêm 30s!</div>}
                    </div>
                  )}
                  <button 
                    className="flashdeal-buy-btn" 
                    disabled={ended || stock === 0}
                    onClick={() => {
                      if (!ended && stock > 0) {
                        if (setCartCount) setCartCount(c => c + 1);
                        setStockArr(arr => arr.map((v, i) => i === idx ? Math.max(0, v - 1) : v));
                      }
                    }}
                  >
                    {stock === 0 ? 'Hết hàng' : 'Mua ngay'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FlashDealModal;
