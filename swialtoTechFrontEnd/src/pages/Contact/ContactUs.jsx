import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Thank you for your message!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mb-5" style={{ marginTop: "6rem" }}>
      <h2 className="text-center mb-4">Contact Us</h2>

      {/* Contact Form Section */}
      <div className="row mb-5">
        <div className="col-md-12 col-lg-6 mb-4 mb-lg-0">
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Details Section */}
        <div className="col-md-12 col-lg-6" style={{ marginTop: "7rem" }}>
          <h3>Contact Details</h3>
          <p>
            <i className="fas fa-map-marker-alt"></i> Address: 123 Spiritual
            Path, Enlightenment City, SC 12345
          </p>
          <p>
            <i className="fas fa-phone"></i> Phone: (123) 456-7890
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email:
            contact@spiritualitywebsite.com
          </p>
        </div>
      </div>

      {/* Customer Appreciation Section */}
      <div className="row">
        <div className="col-md-12 text-center">
          <h4>We Appreciate Your Feedback</h4>
          <p>
            Your feedback helps us grow and serve you better. We value your
            thoughts and suggestions.
          </p>
          <button className="btn btn-secondary">Leave a Review</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
