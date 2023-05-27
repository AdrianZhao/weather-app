import { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="container">
          <div>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
          <p>Weather-App &copy; 2023</p>
        </div>
      </div>
    )
  }
}

export default Footer;