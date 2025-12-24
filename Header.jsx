import React from 'react';
import './Header.css';

const Header = ({ onPageChange }) => {
  return (
    <header className="header">
      <div className="header-logo" onClick={() => onPageChange('main')} style={{cursor: 'pointer'}}>
        <img src="/logo.png" alt="Logo" className="logo-img" />
      </div>

      <nav className="header-nav">
        <div onClick={() => onPageChange('news')}>Новости</div>
        <div onClick={() => onPageChange('events')}>Мероприятия и объявления</div>
        <div onClick={() => onPageChange('tickets')}>Билеты</div>
        <div onClick={() => onPageChange('discuss')}>Обсуждения</div>
      </nav>

      
      <div 
        className="header-user" 
        onClick={() => onPageChange('profile')} 
        style={{ cursor: 'pointer' }}
      >
        Smyslov
      </div>
    </header>
  );
};

export default Header;