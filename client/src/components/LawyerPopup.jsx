// make https://react-popup.elazizi.com
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import '../styles/LawyerPopup.css'

const LawyerPopup = () => {
  const [lawyers, setLawyer] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/lawyers')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLawyer(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return(
    <Popup 
      trigger={<button>Details</button>} 
      position="left center"
      modal
    >
      <div className='popup-container'>
        <h1>Details</h1>
        <img src="https://a.pinatafarm.com/354x640/37342d2d2e/cristiano-ronaldo-smile.jpg"/>
        <h2>John Doe</h2>
        <p>Java, Indonesia</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <button>Contact</button>
      </div>
    </Popup>
  )
}

export default LawyerPopup;
