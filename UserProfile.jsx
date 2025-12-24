
import React from 'react';
import './UserProfile.css';

const UserProfile = () => {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Добро пожаловать, Smyslov!</h1>

      <div className="profile-content">

        <div className="profile-image-wrapper">
          <img 
            src="/user_silhouette.png" 
            alt="User Silhouette" 
            className="profile-avatar" 
            style={{ backgroundColor: !'/user_silhouette.png' ? '#000' : 'transparent' }} 
          />
        </div>

        
        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">Login:</span>
            <span className="info-value">Smyslov</span>
          </div>
          <div className="info-row">
            <span className="info-label">e-mail:</span>
            <span className="info-value">Smyslov2005@mail.ru</span>
          </div>
          <div className="info-row">
            <span className="info-label">Password:</span>
            <span className="info-value">*************</span>
          </div>


          <button className="change-pass-btn" onClick={() => alert('Функция смены пароля')}>
            Изменить пароль
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;