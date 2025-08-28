import './Footer.css';

const Footer = () => {
  return (  
    <footer className="footer">
      <div className="footer-top">
        {/* Brand / Logo */}
        <div className="footer-brand">
          <img src="../../../public/images/logo1.png" alt="Juristiq logo" />
          <p>JURISTIQ</p>
        </div>

        {/* Quick Links */}
        <nav className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/articles">Articles</a></li>
            <li><a href="/lawyers">Find a Lawyer</a></li>
            <li><a href="/register">Register</a></li>
          </ul>
        </nav>

        {/* CTA Section */}
        <div className="footer-cta">
          <h4>Chat with Experts</h4>
          <ul>
            <li>Access to Expertise</li>
            <li>Convenient</li>
            <li>Time-Saving</li>
            <li>Confidential</li>
          </ul>
          <button className="footer-btn">Chat Now</button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Juristiq. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;

