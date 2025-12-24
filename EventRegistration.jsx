import React, { useState } from 'react';
import './EventRegistration.css';

const EventRegistration = () => {
  const [formData, setFormData] = useState({
    login: '',
    password: '',
    email: '',
    phone: '',
    promo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Заявка отправлена!');
  };

  return (
    <div className="registration-wrapper">
      
      
      
      <h1 className="goal-title">GOAL</h1>
      <h2 className="registration-subtitle">Регистрация на мероприятие</h2>

      <form className="registration-form" onSubmit={handleSubmit}>
        
        <div className="form-group">
          <label htmlFor="login">Логин:</label>
          <input type="text" id="login" name="login" value={formData.login} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">e-mail:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Телефон:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label htmlFor="promo">Промокод:</label>
          <input type="text" id="promo" name="promo" value={formData.promo} onChange={handleChange} />
        </div>

        <div className="form-actions">
          <button type="submit" className="reg-submit-btn">
            Зарегистрироваться
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventRegistration;