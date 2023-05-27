import { Component } from 'react';

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
            <li><p>My Weather</p></li>
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