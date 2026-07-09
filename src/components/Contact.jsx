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
        <div className="contact-panel-tag">COLLABORATE</div>
        <h2 className="contact-panel-title">
          HÃY CÙNG<br/>TẠO NÊN<br/>ĐIỀU GÌ ĐÓ<br/><span className="text-orange">ĐẶC BIỆT</span>
        </h2>
        <div className="contact-panel-divider"></div>
        <p className="contact-panel-sub">
          Tôi luôn sẵn sàng lắng nghe những ý tưởng sáng tạo độc đáo của bạn. Hãy để lại thông tin liên lạc và tôi sẽ phản hồi sớm nhất có thể!
        </p>
        <div className="contact-panel-details">
          <div className="contact-panel-item">
            <span className="contact-panel-label">EMAIL ADDRESS</span>
            <a href="mailto:nguyenthianhtho@gmail.com" className="contact-panel-link">nguyenthianhtho@gmail.com</a>
          </div>
          <div className="contact-panel-item">
            <span className="contact-panel-label">HOTLINE</span>
            <a href="tel:0983967621" className="contact-panel-link">0983 967 621</a>
          </div>
          <div className="contact-panel-item">
            <span className="contact-panel-label">FACEBOOK</span>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-panel-link">Nguyễn Thị Anh Thơ</a>
          </div>
        </div>
      </div>

      {/* Right: Form */}
      <div className="contact-form-panel">
        {submitted ? (
          <div className="contact-success">
            <CheckCircle size={64} className="neon-orange" />
            <h3>Gửi tin nhắn thành công!</h3>
            <p>Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại bạn trong vòng 24 giờ tới nhé! ✨</p>
            <button className="contact-reset-btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: '', message: '' }); }}>
              Ghi nhận phản hồi mới
            </button>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form-header">
              <h3>CONNECT WITH ME</h3>
              <p>Điền các thông tin để chúng ta thảo luận dự án tiếp theo</p>
            </div>

            <div className="form-row">
              <div className={`form-group${errors.name ? ' form-group--error' : ''}`}>
                <label htmlFor="name">Họ và tên *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Nhập tên của bạn..."
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
                  <option value="">-- Chọn hình thức --</option>
                  <option value="branding">Thiết kế bộ nhận diện thương hiệu</option>
                  <option value="multimedia">Sản xuất MV & Key Visuals</option>
                  <option value="social">Đổi mới hình ảnh Social Ads</option>
                  <option value="photography">Chụp ảnh Nghệ thuật & Chân dung</option>
                  <option value="other">Yêu cầu khác</option>
                </select>
              </div>
            </div>

            <div className={`form-group${errors.message ? ' form-group--error' : ''}`}>
              <label htmlFor="message">Nội dung yêu cầu *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Mô tả tóm tắt ý tưởng hoặc yêu cầu báo giá của bạn..."
                value={form.message}
                onChange={handleChange}
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="contact-submit-btn">
              <Send size={16} />
              <span>GỬI YÊU CẦU</span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
