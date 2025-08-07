import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home.jsx"
import Lawyer from "./pages/Lawyer.jsx"

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
        <Route path="/" element={<Home />} />
        <Route path="/lawyer" element={<Lawyer />} />
      </Routes>
    </>
  );
}

export default App;
