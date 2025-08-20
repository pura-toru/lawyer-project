import '../App.css'
import '../styles/Footer.css'

const Header = () => {
  return(
    <div className="header">
      <div className='logo'>
        <img src="../../public/images/logo1.png"/>
        <p>JURISTIQ</p>
      </div> 
      <div className='buttons'>  
        <button>Sign Up</button>
        <button>Sign In</button>
      </div> 
    </div>
  )
}

export default Header;
