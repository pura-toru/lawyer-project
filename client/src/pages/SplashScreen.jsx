import React, { useState, useEffect } from 'react';
import Splash1 from '../assets/Splash1.png';
import '../App.css'
import '../styles/SplashScreen.css'

// const [count, setCount] = useState(0)
const quotes = [
  {
    title: "Search for a lawyer",
    description: "Search for a lawyer, know more about his work experience and his area of practice."
  },
  {
    title: "Schedule a meeting",
    description: "Find the right time and schedule an appointment easily with your chosen lawyer."
  },
  {
    title: "Track case progress",
    description: "Stay informed by tracking the progress of your legal case in real-time."
  }
];

const Interval = 5000; 

function SplashScreen() {
  const [quotesIndex, setQuotesIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (quotesIndex < quotes.length - 1) {
        setQuotesIndex(quotesIndex + 1);
      } else {
        console.log('Onboarding complete');
      }
    }, Interval);

    return () => clearTimeout(timer);
  }, [quotesIndex]);

  const handleNext = () => {
    if (quotesIndex < quotes.length - 1) {
      setQuotesIndex(quotesIndex + 1);
    }
  };

  const handleSkip = () => {
    setQuotesIndex(quotes.length - 1);
  };

  return (
    <div className="onboarding-container">
      <div className="image-container">
        <img src= {Splash1} alt="Illustration" className="illustration" />
      </div>

      <div className="pagination-dots">
        {quotes.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === quotesIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <h2>{quotes[quotesIndex].title}</h2>
      <p>{quotes[quotesIndex].description}</p>

      <button className="next-button" onClick={handleNext}>
        {quotesIndex < quotes.length - 1 ? 'Next' : 'Done'}
      </button>
      <button className="skip-link" onClick={handleSkip}>Skip</button>
    </div>
  );
};
        // <button onClick={() => setCount((count) => count + 1)}>
        //   count is {count}
export default SplashScreen;
