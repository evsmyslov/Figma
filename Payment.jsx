import React from 'react';
import './Payment.css';
import ticketImg from 'C://Users/USER/figma-react/public/ticket.png'; 

const Payment = ({ onBack }) => {
  return (
    <div className="payment-wrapper">
      
      <button className="back-link" onClick={onBack}>
        ← Назад к выбору
      </button>

      <div className="payment-container">
        
        <div className="ticket-section">
          <img src={ticketImg} alt="Official Ticket" className="ticket-img" />
        </div>

        
        <div className="payment-form-section">
          <div className="header-match-info">
            <h3 className="form-title">OFFICIAL TICKET</h3>
            <p className="form-subtitle">Camp Nou, Spanish League</p>
          </div>

          
          <div className="payment-methods">
            <button className="method-btn active">Card</button>
            <button className="method-btn">EPS</button>
            <button className="method-btn">Giropay</button>
            <button className="method-btn">...</button>
          </div>

          <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-block">
              <label>Номер карты</label>
              <div className="input-group">
                <input type="text" placeholder="1234 1234 1234 1234" />
                <div className="card-icons">
                  <span className="visa">VISA</span>
                  <span className="mastercard">MC</span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Дата</label>
                <input type="text" placeholder="MM / YY" />
              </div>
              <div className="col">
                <label>CVC</label>
                <input type="text" placeholder="CVC" />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label>Страна</label>
                <select className="payment-select">
                  <option>United States</option>
                  <option>Russia</option>
                  <option>Spain</option>
                </select>
              </div>
              <div className="col">
                <label>Индекс</label>
                <input type="text" placeholder="90210" />
              </div>
            </div>

            <button type="submit" className="pay-now-btn">
              Оплатить 75.50 €
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;