import React, { useState, useEffect } from 'react';
import '../styles/Lawyer.css'; 

const Lawyer= () => {
  const [lawyers, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/lawyers')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
/* 
action search mungkin buat hubungin query nanti belom pasti jadi gw komen
ref: https://react.dev/reference/react-dom/components/form */
  return (
    <>
      <div className="SearchBar">
        <h1>Find your lawyer here:</h1>
        <form /*action={search}*/>
          <input name="query" placeholder="Name" /> 
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="Main">
        {lawyers.map((lawyer) => {
          return (
            <div className="LawyerBox">
              <img src="https://a.pinatafarm.com/354x640/37342d2d2e/cristiano-ronaldo-smile.jpg" alt={lawyer.Name}/>
              <h2 className="LawyerName">{lawyer.Name}</h2>
              <p>{lawyer.Location}</p>
              {/* Function buat cut string biography */}
              <p>{lawyer.Biography.substring(0, 100)}</p>
              <p></p>
            </div>
          );
        })}
        <h2> Prev 1 2 3 Next </h2>
      </div>
    </>
  );
};

export default Lawyer;
