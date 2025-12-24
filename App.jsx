import React, { useState } from 'react';
import Header from './components/Header';
import EventsTable from './components/EventsTable';
import News from './components/News';
import Events from './components/Events';
import Tickets from './components/Tickets';
import Discussions from './components/Discussions';
import Payment from './components/Payment';
import EventRegistration from './components/EventRegistration'; 
import UserProfile from './components/UserProfile';

import './index.css';

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  const renderPage = () => {
    switch (currentPage) {
      case 'news': return <News />;
      
      case 'events': 
        return <Events onRegisterClick={() => setCurrentPage('registration')} />;
      
      case 'tickets': 
        return <Tickets onBuyClick={() => setCurrentPage('payment')} />;
        
      case 'discuss': return <Discussions />;
      
      case 'payment': 
        return <Payment onBack={() => setCurrentPage('tickets')} />;

      case 'registration':
        return <EventRegistration />;
        
      case 'profile':
        return <UserProfile />;

      default: return <EventsTable />;
    }
  };

  return (
    <div className="app-container">
      <Header onPageChange={setCurrentPage} />

      <main className="main-content">
        {renderPage()} 
      </main>

      <footer className="footer">
        <div className="footer-text">
            Спорт - физические упражнения для развития и укрепления организма, а 
            также система организации и проведения соревнований в различных областях 
            физической культуры.
        </div>
      </footer>
    </div>
  );
}

export default App;