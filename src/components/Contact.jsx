import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Vui lòng nhập tên của bạn.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email không hợp lệ.';
    if (!form.message.trim()) newErrors.message = 'Vui lòng nhập nội dung tin nhắn.';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      {/* Left: Info */}
      <div className="contact-info-panel">
        <div className="contact-panel-tag">LIÊN HỆ</div>
        <h2 className="contact-panel-title">HÃY CÙNG<br/>TẠO NÊN<br/>ĐIỀU GÌ ĐÓ<br/>ĐẶC BIỆT</h2>
        <div className="contact-panel-divider"></div>
        <p className="contact-panel-sub">
          Tôi luôn sẵn sàng lắng nghe những ý tưởng sáng tạo của bạn. Hãy để lại thông tin và tôi sẽ liên hệ lại sớm nhất!
        </p>
        <div className="contact-panel-details">
          <div className="contact-panel-item">
            <span className="contact-panel-label">Email</span>
            <span>nguyenthianhtho@gmail.com</span>
          </div>
          <div className="contact-panel-item">
            <span className="contact-panel-label">Điện thoại</span>
            <span>0983 967 621</span>
          </div>
          <div className="contact-panel-item">
            <span className="contact-panel-label">Facebook</span>
            <a href="#" className="contact-panel-link">Nguyễn Thị Anh Thơ</a>
          </div>
        </div>
        {/* Decorative squares */}
        <div className="contact-deco-sq contact-deco-sq--1"></div>
        <div className="contact-deco-sq contact-deco-sq--2"></div>
        <div className="contact-deco-sq contact-deco-sq--3"></div>
      </div>

      {/* Right: Form */}
      <div className="contact-form-panel">
        {submitted ? (
          <div className="contact-success">
            <CheckCircle size={60} color="#7DC6B7" />
            <h3>Cảm ơn bạn đã liên hệ!</h3>
            <p>Tôi sẽ phản hồi trong vòng 24 giờ. Hẹn gặp lại sớm! 🎨</p>
            <button className="contact-reset-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}>
              Gửi tin nhắn khác
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-header">
              <h3>GỬI TIN NHẮN</h3>
              <p>Điền thông tin bên dưới để bắt đầu hợp tác</p>
            </div>

            <div className="form-row">
              <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                <label htmlFor="name">Họ và tên *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nhập họ và tên của bạn"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>
              <div className={`form-group${errors.email ? ' form-group--error' : ''}`}>
                <label htmlFor="email">Email *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0xxx xxx xxx"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Dịch vụ quan tâm</label>
                <select id="service" name="service" value={form.service} onChange={handleChange}>
                  <option value="">-- Chọn dịch vụ --</option>
                  <option value="photography">Chụp ảnh thời trang</option>
                  <option value="portrait">Chụp ảnh chân dung</option>
                  <option value="commercial">Chụp ảnh thương mại</option>
                  <option value="event">Chụp ảnh sự kiện</option>
                  <option value="other">Khác</option>
                </select>
              </div>
            </div>

            <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
              <label htmlFor="message">Nội dung *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Chia sẻ ý tưởng hoặc yêu cầu của bạn..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="contact-submit-btn">
              <Send size={18} />
              <span>GỬI TIN NHẮN</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
