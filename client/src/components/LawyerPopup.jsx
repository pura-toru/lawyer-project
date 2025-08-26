// Make https://react-popup.elazizi.com
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import '../styles/LawyerPopup.css'

const LawyerPopup = ({ lawyer }) => {
  const deleteLawyer = async (lawyer_id) => {
    try{
      const res = await fetch(`http://localhost:3000/lawyers/${lawyer_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok){
        alert("Successfully deleted lawyer!")
      } else{
        alert("Failed to delete!");
      }
    } 
    catch (err){
      console.error("Error: ", err);
    }
  }

  return(
    <Popup 
      trigger={<button>Details</button>} 
      position="left center"
      modal
    >
      <div className='popup-container'>
        <h1>Details</h1>
        <h2>{lawyer.first_name} {lawyer.last_name}</h2>
        <img src="https://a.pinatafarm.com/354x640/37342d2d2e/cristiano-ronaldo-smile.jpg"/>
        <h3>Location</h3>
        <p>{lawyer.location}</p>
        <h3>Description</h3>
        <p>{lawyer.biography}</p>
        <h3>Experience</h3>
        <p>{lawyer.experience}</p>
        <button>Website</button>
        <button onClick={() => deleteLawyer(lawyer.lawyer_id)}>Delete</button>
        <p>Email: @something</p>
        <p>Phone: </p>
      </div>
    </Popup>
  )
}

export default LawyerPopup;
