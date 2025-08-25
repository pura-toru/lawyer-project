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
        <Link to='/consultations'>Consultations</Link>
        <Link to='/blogs'>Blogs</Link>
        <Link to='/blogs'>Blogs</Link>
      </nav>
      <div className='register-container'>  
        <button>Sign Up</button>
        <button>Sign In</button>
      </div> 
    </div>
  )
}

export default Header;
