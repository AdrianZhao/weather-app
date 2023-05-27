import { Component } from 'react';
import { Link } from "react-router-dom";
class Header extends Component {
  render() {
    const { title } = this.props;
    return (
      <header>
        <div className='container flexbox'>
          <div className='header-title'>
            <i className="ph ph-cloud-moon"></i>
            <h1>{title}</h1>
          </div>
          <ul>
            <li><Link to="/weather-app"><p>Homepage</p></Link></li>
            <li><p>List of Cities</p></li>
            <li><p>About Us</p></li>
            <li><p>Subscribe</p></li>
            <li><p>Contact Us</p></li>
          </ul>
        </div>
      </header>
    )
  }
}

export default Header;