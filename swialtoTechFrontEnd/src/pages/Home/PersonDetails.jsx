import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PersonDetails = () => {
  return (
    <div className="container person-details">
      <div className="row align-items-center">
        {/* Left Side: Box-Type Photo */}
        <div className="col-md-4 text-center">
          <img
            src="assets/images/banner-3.jpg" // Replace with the actual image URL
            alt="John Doe"
            className="img-fluid person-photo"
          />
        </div>

        {/* Right Side: Details */}
        <div className="col-md-8">
          <h2 className="person-name"></h2>
          <p className="person-info">hello world!</p>
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
