import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"
import Splash from "./pages/SplashScreen.jsx"
import Lawyer from "./pages/Lawyer.jsx"
import CreateLawyer from "./pages/CreateLawyer.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lawyer" element={<Lawyer />} />
        <Route path="/lawyer/create" element={<CreateLawyer />} />
      </Routes>
    </>
  );
}

export default App;
