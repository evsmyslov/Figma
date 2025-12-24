import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    { time: '16:22', text: 'Гоцук и Берковский расторгли контракты с турецким «Сериком» из-за долгов' },
    { time: '16:05', text: 'Алексей Батраков и Эдуард Сперцян — самые дорогие игроки РПЛ по версии Transfermarkt' },
    { time: '15:49', text: 'Суд обязал «ПСЖ» выплатить Килиану Мбаппе € 61 млн — RMC Sport' },
    { time: '14:19', text: '«Лацио» станет вторым футбольным клубом, позвонившим в колокол на Уолл-стрит' },
    { time: '13:42', text: 'Главным тренером «Трактора» назначен Евгений Корешков' },
    { time: '12:43', text: 'Руни: «Арсенал» — фаворит АПЛ, но «Манчестер Сити» может составить конкуренцию' },
  ];

  return (
    <section id="news" className="news-section">
      <h2 className="section-title">НОВОСТИ</h2>
      <ul className="news-list">
        {newsItems.map((item, index) => (
          <li key={index} className="news-item">
            <span className="ball-icon-small">⚽</span>
            <span className="news-time">{item.time}</span>
            <span className="news-text">{item.text}</span>
          </li>
        ))}
      </ul>
      
    </section>
  );
};

export default News;