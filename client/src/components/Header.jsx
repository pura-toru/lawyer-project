import { Link } from 'react-router-dom'
import '../App.css'
import '../styles/Footer.css'

const Header = () => {
  return(
    <div className="header">
      <div className='logo'>
        <img src="../../public/images/logo1.png"/>
        <p>JURISTIQ</p>
      </div> 
      <nav className="nav-bar">
        <Link to='/consultations'><button className='nav-bar-button'>Consultations</button></Link>
        <Link to='/home'><button className='nav-bar-button'>Home</button></Link>
        <Link to='/articles'><button className='nav-bar-button'>Articles</button></Link>
      </nav>
      <div className='register-container'>  
        <button className='nav-bar-button'>Sign Up</button>
        <button className='nav-bar-button'>Sign In</button>
      </div> 
    </div>
  )
}

export default Header;
