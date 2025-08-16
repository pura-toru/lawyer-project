import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"
import Splash from "./pages/SplashScreen.jsx"
import Lawyer from "./pages/Lawyer.jsx"
import CreateLawyer from "./pages/CreateLawyer.jsx"
import Test from "./pages/TestBackend.jsx" //Ini page buat test backend, gw udh ada contoh kalo bisa lu ikutin aja ntar ada database dia cara jalan sama soalny api endpoint gw samain. Cara run liat di TestBackend.jsx & app.py di server.

function App() {
  const [count, setCount] = useState(0);
  /* Header gw taro diluar <Routes> biar nongol di tiap page, kykny bisa di set biar nongol di page tertentu tp gw blm research */
  return (
    <>
      <Header /> 
      <Routes>
        <Route path="/" element={<Splash />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        <Route path="/register" element={<Register />} />
        { <Route path="/home" /*index*/ element={<Home />} /> }
        <Route path="/lawyer" element={<Lawyer />} />
        <Route path="/lawyer/create" element={<CreateLawyer />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
}

export default App;
