import React, { useState, useEffect } from 'react';
import LawyerPopup from '../components/LawyerPopup.jsx'
import '../styles/Lawyer.css'; 

const Lawyers= () => {
  const [lawyer, setLawyer] = useState([]);

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
/* 
action search mungkin buat hubungin query nanti belom pasti jadi gw komen
ref: https://react.dev/reference/react-dom/components/form 

Kasih filter buat sort gitu di search container
*/
  return (
    <>
      <div className="search-container">
        <h1>Find your lawyer here:</h1>
        <form /*action={search}*/>
          <input name="query" placeholder="Name" /> 
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="main-container">        
        {lawyer.map((lawyer) => {
          return (
            <div className="lawyer-container" key={lawyer.lawyer_id}>
              <img src="https://a.pinatafarm.com/354x640/37342d2d2e/cristiano-ronaldo-smile.jpg" alt={lawyer.first_name}/>
              <div className="lawyer-details">
                <h2 className="lawyer-name">{lawyer.first_name} {lawyer.last_name}</h2>
                <p>{lawyer.location}</p>
                {/* Function buat cut string biography */}
                <p>{lawyer.biography.substring(0, 100)}</p>
                {<LawyerPopup />}
              </div>
            </div>
          );
        })}
        {/* Ini gw gtw cara limit display per hlm, gw si pengen 1 page 10 query lawyer*/}
        <h2> Prev 1 2 3 Next </h2>
      </div>
    </>
  );
};
export default Lawyers;
