import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
// Drl lu ganti yg welcome tinggal sesuain aja kaya yg bawah(import, Route path)
// import Welcome from "./components/Lawyer.jsx"
import Home from "./components/Home.jsx"
import Splash from "./components/SplashScreen.jsx"

function App() {
  const [count, setCount] = useState(0);

  // Basic code to connect/test to backend - cnd
  // useEffect(() => {
  //   fetch('http://localhost:6969/api/hello')
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.error('Fetch error:', err));
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
