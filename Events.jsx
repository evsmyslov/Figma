import React from 'react';
import './Events.css';

const Events = ({ onRegisterClick }) => {
  return (
    <section id="events" className="events-section">
      <h2 className="section-title">Мероприятия и объявления</h2>
      
      <div className="events-grid">
        <div className="event-card card-overlay">
          <div className="card-image" style={{backgroundImage: `url('222.png')`}}></div>
          <div className="card-content-overlay">
            <p>В Москве пройдут тренировочные сборы с ведущими скаутами топ-клубов.</p>
          </div>
          <button className="card-btn" onClick={onRegisterClick}>Записаться</button>
        </div>

        <div className="event-card card-white">
          <div className="card-image-top" style={{backgroundImage: `url('1111.png')`}}></div>
          <div className="card-body">
            <p>Проводится запись на мастер-класс по футбольному фристайлу в Москве</p>
          </div>
          <button className="card-btn" onClick={onRegisterClick}>Записаться</button>
        </div>

        <div className="event-card card-white">
          <div className="card-image-top" style={{backgroundImage: `url('321.png')`}}></div>
          <div className="card-body">
            <p>Подготовительные функциональные курсы по футболу. Ведется набор младшей группы</p>
          </div>
          <button className="card-btn" onClick={onRegisterClick}>Записаться</button>
        </div>
      </div>
    </section>
  );
};

export default Events;