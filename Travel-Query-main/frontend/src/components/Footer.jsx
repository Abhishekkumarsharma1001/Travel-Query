import React from 'react'

const Footer = () => {
  return (
    <div>
         <footer className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <h3>Vacations<span>.</span></h3>
          <p>
            Explore your suitable and dream places around the world. Here you
            can find your right destination.
          </p>
        </div>
        <div className="footer__col">
          <h4>Support</h4>
          <p>FAQs</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </div>
        <div className="footer__col">
          <h4>Address</h4>
          <p>
            <span>Address:</span> Amrit Vihar, Nathupura Road, Delhi, 110084,
            India
          </p>
          <p><span>Email:</span> info@vacations.com</p>
          <p><span>Phone:</span> +91 8317791408</p>
        </div>
      </div>
      <div className="footer__bar">
        Created by Abhishek Kumar Sharma
      </div>
    </footer>
    </div>
  )
}

export default Footer