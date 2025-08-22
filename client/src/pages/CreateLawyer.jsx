import React, { useState, useEffect } from 'react';
import '../styles/CreateLawyer.css'; 

const CreateLawyer= () => {
  const addLawyer = () => {
    const [name, setName] = useState([]);
    const [location, setLocation] = useState('');
    const [biography, setBiography] = useState('');
    const [experience, setExperience] = useState('');

    const handleSubmit = async (e) => {
      try{
        const res = await fetch('http:/localhost:5000/lawyers/post', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
          body: JSON.stringify({ username, content }),
        });

        const data = await res.json();
        if (res.ok){
          alert("Posted");
          setName("");
          setLocation("");
        } else{
          alert(data.message || "Failed to post!");
        }
      } catch (err){
        console.error("Error: " err);
        alert("Failed to send data!")
      }
    }

    return(
      <div className="<form>
        
      </form>-container">
        <input value="name"
      >
      </div>
    )
  }
};

export default CreateLawyer;
