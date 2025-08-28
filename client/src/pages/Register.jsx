import React, { useState } from 'react';
// import '../styles/CreateLawyer.css'; 


const longText = "People who use our service may have uploaded your contact information to Lawyery. Learn more. By tapping Submit, you agree to create an account and to Lawyery's Terms, Privacy Policy and Cookies Policy. The privacy policy describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalise and improve our products, including ads."

const Register = () => {
      const [registerData, setregisterData] = useState({
        email: '',
        password: '',
      });

    const handleSubmit = async (e) => {
      e.preventDefault();
      try{
        const res = await fetch('http://localhost:3000/lawyers', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(registerData),
        });
        const data = await res.json();
        if (res.ok){
          alert("Welcome");
        } else{
          alert(data.message || "Failed to post!");
        }
      } 
      catch (err){
        console.error("Error: ", err);
        alert("Failed to send data!")
      }
    }
  return(
    <div className="register-box">
      <h1>Get started on lawyery</h1>
      <p>We're excited to have you join us</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            value={registerData.email}
            onChange={(e) => setregisterData({ ...registerData, email: e.target.value})}
            type="text" maxLength="35" placeholder="Email" required/>

          <label>Password</label>
          <input
            value={registerData.password}
            onChange={(e) => setregisterData({ ...registerData, password: e.target.value})}
            type="text" maxLength="35" placeholder="Password" required/>
        </form>

         <button type="submit">Submit</button>
      </div>
    </div>
    
  )
}

export default Register;
