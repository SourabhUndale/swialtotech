import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left allfooter">
          {/* Company Info */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Company Name</h5>
            <p className='pg'>
              Your e-commerce site’s description goes here. Talk about what makes your company unique and why customers should trust your products.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Links</h5>
            <p>
              <a href="#!" className="text-white">Home</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shop</a>
            </p>
            <p>
              <a href="#!" className="text-white">About Us</a>
            </p>
            <p>
              <a href="#!" className="text-white">Contact</a>
            </p>
          </div>

          {/* Customer Support */}
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Customer Support</h5>
            <p>
              <a href="#!" className="text-white">FAQ</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shipping & Returns</a>
            </p>
            <p>
              <a href="#!" className="text-white">Order Tracking</a>
            </p>
            <p>
              <a href="#!" className="text-white">Privacy Policy</a>
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="mb-4 font-weight-bold">Contact Us</h5>
            <div className='pg'>
            <p>
              <i className="fas fa-home mr-3"></i> 1234 Street Name, City, Country
            </p>
            <p>
              <i className="fas fa-envelope mr-3"></i> info@example.com
            </p>
            <p>
              <i className="fas fa-phone mr-3"></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print mr-3"></i> + 01 234 567 89
            </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="row align-items-center mt-3">
          <div className="col-md-7 col-lg-8">
            <p className="text-left text-md-left">
              © 2024 Your Company Name. All rights reserved.
            </p>
          </div>
          <div className="col-md-5 col-lg-4 text-center text-md-right">
            <a href="#!" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white ml-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white ml-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="text-white ml-4">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
