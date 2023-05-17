import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <section className="footer-contact">
        <h3>Contact Us</h3>
        <p>
          Customer Service and sales:
          <br />
          Monday - Friday
          <br />
          9:00am - 9:00pm
          <br />
          contact@aldotech.com
        </p>
      </section>
      <section className="footer-help">
        <h3>Help</h3>
        <ul>
          <li>Help center</li>
          <li>How to make a purchase</li>
          <li>Deliveries and returns</li>
        </ul>
      </section>
      <section className="footer-services">
        <h3>Services</h3>
        <ul>
          <li>Electronic Billing</li>
          <li>Download the App</li>
          <li>Get your money from abroad</li>
          <li>Aldo Tech credit</li>
          <li>Digital catalog</li>
        </ul>
      </section>
      <section className="footer-about">
        <h3>About us</h3>
        <ul>
          <li>Hot sale</li>
          <li>Media</li>
          <li>Store locator</li>
        </ul>
      </section>
    </div>
  );
};

export default Footer;
