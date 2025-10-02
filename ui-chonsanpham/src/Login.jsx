import React, { useState } from 'react';
import './Login.css';

export default function Login({ onLogin }) {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [step, setStep] = useState('phone'); // 'phone' | 'otp'
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 'phone') {
      if (!/^0\d{9,10}$/.test(phone)) {
        setError('Vui lòng nhập số điện thoại hợp lệ!');
        return;
      }
      setError('');
      setStep('otp');
      // Thực tế sẽ gửi OTP về số điện thoại ở đây
      return;
    }
    if (step === 'otp') {
      if (!/^\d{4,6}$/.test(otp)) {
        setOtpError('Vui lòng nhập mã OTP hợp lệ!');
        return;
      }
      setOtpError('');
  if (onLogin) onLogin(phone);
    }
  };

  return (
    <div className="login-page-bg">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">
          Mua hàng<br/>
          <span style={{fontSize:'1.05em',fontWeight:500,display:'block',color:'#22336b',marginTop:2}}>hoặc tra cứu đơn hàng</span>
        </h2>
        {step === 'phone' && (
          <>
            <label htmlFor="phone" className="login-label">Số điện thoại</label>
            <input
              id="phone"
              className="login-input"
              type="tel"
              placeholder="Nhập số điện thoại..."
              value={phone}
              onChange={e => setPhone(e.target.value)}
              maxLength={11}
              autoFocus
            />
            {error && <div className="login-error">{error}</div>}
            <button className="login-btn" type="submit">Đăng nhập</button>
          </>
        )}
        {step === 'otp' && (
          <>
            <label htmlFor="otp" className="login-label">
              Chào mừng <b>...{phone.slice(-3)}</b>
            </label>
            <input
              id="otp"
              className="login-input"
              type="text"
              placeholder="Nhập mã OTP..."
              value={otp}
              onChange={e => setOtp(e.target.value)}
              maxLength={6}
              autoFocus
            />
            {otpError && <div className="login-error">{otpError}</div>}
            <button className="login-btn" type="submit">Xác nhận</button>
            <button type="button" className="login-btn" style={{background:'#ffb366',marginTop:8}} onClick={()=>setStep('phone')}>Quay lại</button>
          </>
        )}
      </form>
    </div>
  );
}
