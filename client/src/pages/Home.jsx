import React from "react";
import '../styles/Home.css'

const Home= () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Peler Up</h1>
        <input type="text" placeholder="Search for lawyers" className="search-bar" />
      </header>
      
      <section className="free-consultation">
        <h2>Top consultation</h2>
        <div className="lawyer-cards">
          <div className="lawyer-card">
            <img src="../../public/images/TemporaryPicture.jpg" alt="Lawyer" />
            <div className="lawyer-info">
              <h3>Rako</h3>
              <p>Family lawyer - Tax lawyer</p>
              <p className="rating">Rating</p>
              <p className="free-text">Free</p>
            </div>
          </div>
          <div className="lawyer-card">
            <img src="../../public/images/TemporaryPicture.jpg" alt="Lawyer" />
            <div className="lawyer-info">
              <h3>Surenco</h3>
              <p>Criminal lawyer - Tax lawyer</p>
              <p className="rating">Rating</p>
              <p className="free-text">Free</p>
            </div>
          </div>
        </div>
        <button className="view-all-btn">View all</button>
      </section>
      
      <section className="categories">
        <button className="category-btn">Divorce lawyers</button>
        <button className="category-btn">Family lawyers</button>
        <button className="category-btn">Criminal lawyers</button>
        <button className="category-btn">Tax lawyers</button>
      </section>
      
      <section className="chat-section">
        <h3>Chat with experts</h3>
        <ul>
          <li>Access to Expertise</li>
          <li>Convenient</li>
          <li>Time-Saving</li>
          <li>Confidential</li>
        </ul>
        <button className="chat-btn">Chat now</button>
      </section>

      <section className="steps-section">
        <h3>Steps to book an appointment</h3>
        <p>1. Choose a lawyer from the list.</p>
        <p>2. Schedule your appointment.</p>
        <p>3. Discuss your case with the lawyer.</p>
      </section>

      <footer className="footer">
        <button className="footer-btn">All lawyers</button>
      </footer>
    </div>
  );
};

export default Home;
    // <div className="scroll-container">
    //   {[...Array(10)].map((_, i) => (
    //     <div className="scroll-item" key={i}>
    //       Item {i + 1}
    //     </div>
    //   ))}
    // </div>