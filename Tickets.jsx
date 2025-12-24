import React from 'react';
import './Tickets.css';

const Tickets = ({ onBuyClick }) => {
  const tickets = [
    { time: '12:00', match: '«Кардифф Сити» - «Челси», Кубок английской лиги, 1/4 финала' },
    { time: '23:00', match: '«Гвадалахара» - «Барселона», Кубок Испании, 1/16 финала' },
    { time: '23:00', match: '«Эльденсе» — «Реал Сосьедад», Кубок Испании, 1/16 финала' },
  ];

  return (
    <section id="tickets" className="tickets-section">
      <h2 className="section-title">Билеты</h2>
      <div className="tickets-list">
        {tickets.map((item, index) => (
          <div key={index} className="ticket-row">
            <div className="ticket-info">
              <span className="ball-icon">⚽</span>
              <span className="ticket-time">{item.time}:</span>
              <span className="ticket-match">{item.match}</span>
            </div>
            
            <button className="buy-btn" onClick={onBuyClick}>
                Купить билет
            </button>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tickets;