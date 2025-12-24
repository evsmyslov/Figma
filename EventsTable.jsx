import React from 'react';
import './EventsTable.css';

const EventsTable = () => {
  const data = [
    { date: '11.11.2026', city: 'Обнинск', event: 'Чемпионат мира 2026', price: 'Билеты от 2500р' },
    { date: '13.07.2026', city: 'Москва', event: 'Чемпионат мира U-17', price: 'Билеты от 500р' },
    { date: '19.08.2026', city: 'Челябинск', event: 'Турнир "Кожаный мяч"', price: 'Билеты бесплатно' },
    { date: '26.04.2026', city: 'Троицк', event: 'ЛФЛ 8x8', price: 'Билеты бесплатно' },
    { date: '03.03.2026', city: 'Домодедово', event: 'Кубок Легенд мирового футбола', price: 'Билеты от 1000р' },
  ];

  return (
    <div className="table-wrapper">
      <table className="pixel-table">
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="col-date">{item.date}</td>
              <td className="col-city">{item.city}</td>
              <td className="col-event">{item.event}</td>
              <td className="col-price">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EventsTable;