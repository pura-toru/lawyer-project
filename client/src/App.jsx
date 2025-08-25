import { useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx';
import Home from "./pages/Home.jsx"
import Register from "./pages/Register.jsx"
import Splash from "./pages/SplashScreen.jsx"
import Lawyers from "./pages/Lawyers.jsx"
import CreateLawyer from "./pages/CreateLawyer.jsx"
import Test from "./pages/TestBackend.jsx" //Ini page buat test backend, gw udh ada contoh kalo bisa lu ikutin aja ntar ada database dia cara jalan sama soalny api endpoint gw samain. Cara run liat di TestBackend.jsx & app.py di server.

function App() {
  const [count, setCount] = useState(0);
  const location = useLocation();
  const pageWithHeaderFooter = ['/home', '/lawyers' ,'/register']
  const showHeader = pageWithHeaderFooter.includes(location.pathname);
  return (
    <>
      {showHeader && <Header />} 
      <Routes>
        <Route path="/" element={<Splash />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        <Route path="/register" element={<Register />} />
        { <Route path="/home" /*index*/ element={<Home />} /> }
        <Route path="/lawyers" element={<Lawyers />} />
        <Route path="/lawyers/create" element={<CreateLawyer />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      {showHeader && <Footer />}
    </>
  );
}

export default App;
