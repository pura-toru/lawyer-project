import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'
import '../styles/SplashScreen.css';
import Splash1 from '../../public/images/Splash1.png';

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

const SplashScreen = () => {
  const [quotesIndex, setQuotesIndex] = useState(0);
  const [isHidden, setIsHidden] = useState(false);

  // timer buat auto pagination dots
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
    <div className='landing-page-body'>
    <div className="onboarding-container">
      <div className="image-container">
        <img src= {Splash1} alt="Illustration" className="illustration" />
      </div>

      <div className="pagination-dots">
        {/* .mapp restructured array, masih belum paham gunanya key*/}
        {quotes.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === quotesIndex ? 'active' : ''}`}
          />
        ))}
      </div>

      <h2>{quotes[quotesIndex].title}</h2>
      <p className='quotes'>{quotes[quotesIndex].description}</p>

         <button className= {quotesIndex < quotes.length - 1 ? 'splash-button' : 'hidden'} onClick={handleNext}>
          Next
        {/* {quotesIndex < quotes.length - 1 ? '' : 'Done'} */}
        {/* ubah inner html klo udh di akhir array */}
      </button>
      <Link to="/home">
      <button className="splash-button" onClick={handleSkip}>Skip</button>
      </Link>
    </div>
    </div>
  );
};
        // <button onClick={() => setCount((count) => count + 1)}>
        //   count is {count}
        // buat count/click. Currently unused
export default SplashScreen;
