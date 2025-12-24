import React from 'react';
import './Discussions.css';

const Discussions = () => {
  return (
    <section id="discuss" className="discussions-section">
      <h2 className="section-title">Обсуждения</h2>
      
      
      <div className="discuss-news-grid">
        <div className="discuss-card">
           <img src="123.png" alt="News" className="discuss-img"/>
           <div className="discuss-caption">
             ФИФА вручает свой «Золотой мяч»! А форвард ЦСКА остался без премии Пушкаша!
           </div>
        </div>
        <div className="discuss-card">
           <img src="234.png" alt="News" className="discuss-img"/>
           <div className="discuss-caption">
             Такого сюжета в этом сезоне АПЛ ещё не было! «МЮ» забил четыре, но всё равно не выиграл
           </div>
        </div>
      </div>

      
      <div className="chat-bubbles-container">
        
        
        <div className="chat-bubble">
          <div className="chat-content">
            <div className="chat-header">
              <span className="username">vjdydj</span> <span className="date">16.12 в 17:15</span>
            </div>
            <div className="chat-message">Какой еще ямаль??? Это кто вообще?</div>
            
            <div className="chat-reply-preview">
                <span className="reply-user">borobro</span>
                <span className="reply-text">vjdydj: У него феерический сезон...</span>
            </div>

            <div className="chat-header mt-2">
              <span className="username">topdispatcher</span> <span className="date">16.12 в 19:19</span>
            </div>
            <div className="chat-message">Ну гол на премию Пушкаша очень даже достойный!</div>
            
            <div className="chat-actions">
               <span>👍 👎</span>
            </div>
          </div>
        </div>

        
        <div className="chat-bubble">
           <div className="chat-content">
            <div className="chat-header">
              <span className="username">reynor777</span> <span className="date">16.12 в 19:32</span>
            </div>
            <div className="chat-message">Борнмут наиграл на победу, особенно в концовке.</div>
            <div className="chat-actions"><span>👍 👎</span></div>

            <div className="chat-header mt-4">
              <span className="username">undertaker</span> <span className="date">16.12 в 06:33</span>
            </div>
            <div className="chat-message">Вот это МЮ выдали жаркий весёлый концерт )))</div>
            <div className="chat-actions"><span>👍 👎</span></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Discussions;