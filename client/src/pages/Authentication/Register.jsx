import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const longText = "People who use our service may have uploaded your contact information to Lawyery. Learn more. By tapping Submit, you agree to create an account and to Lawyery's Terms, Privacy Policy and Cookies Policy. The privacy policy describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalise and improve our products, including ads."

const Register = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    email: '',
    password: '',
  });

  const handleChange =  e => {
    setRegisterData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await fetch('http://localhost:3000/users/register', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registerData),
      });
      const data = await res.json();
      // const text = await res.text();
      // console.log('Raw response:', text);
      if (res.ok){
        alert( data.message || " Welcome");
        navigate('/login');
      } else{
        alert(data.message || "Registration error");
      }
    } catch (err){
      console.error("Error: ", err);
      alert("Network error")
    }
  };

  return(
    <div className="auth-container">
      <h1>Get started on lawyery</h1>
      <p>We're excited to have you join us</p>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label>Upload an image:</label>
          <input name='user-photo' type="file" />

          <label>Username</label>

          <label>Email</label>
          <input
            name='email'
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value})}
            type="email" maxLength="35" placeholder="Email" required/>

          <label>Password</label>
          <input
            name='password'
            value={registerData.password}
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value})}
            type="password" maxLength="35" placeholder="Password" required/>

            <button type="submit">Submit</button>
        </form>

        <div className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </div>
      </div>
    </div>
    
  )
}

export default Register;
