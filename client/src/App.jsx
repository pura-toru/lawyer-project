import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"
import Splash from "./pages/SplashScreen.jsx"
import Lawyer from "./pages/Lawyer.jsx"
import CreateLawyer from "./pages/CreateLawyer.jsx"
import Test from "./pages/TestBackend.jsx"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/lawyer" element={<Lawyer />} />
        <Route path="/lawyer/create" element={<CreateLawyer />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
