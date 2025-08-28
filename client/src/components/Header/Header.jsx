import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      {/* Left: Logo */}
      <div className="header-logo">
        <img src="/images/logo1.png" alt="Juristiq logo" />
        <p>JURISTIQ</p>
      </div>

      {/* Middle: Nav */}
      <nav className="header-nav">
        <Link to="/home">Home</Link>
        <Link to="/articles">Articles</Link>
      </nav>

      {/* Right: Auth Buttons */}
      <div className="header-auth">
        <button className="btn-signup">Sign Up</button>
        <button className="btn-signin">Sign In</button>
      </div>
    </header>
  );
};

export default Header;

