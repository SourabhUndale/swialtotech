import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


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
          <p className="person-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac venenatis eros. 
            Praesent et purus nec arcu viverra consequat. Sed cursus magna et ligula sodales, 
            vel vehicula orci commodo. Duis tincidunt est eu nunc vulputate, nec ornare eros luctus. 
            Maecenas ut risus eget nunc dignissim aliquet sit amet in elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac venenatis eros. 
            Praesent et purus nec arcu viverra consequat. Sed cursus magna et ligula sodales, 
            vel vehicula orci commodo. Duis tincidunt est eu nunc vulputate, nec ornare eros luctus. 
            Maecenas ut risus eget nunc dignissim aliquet sit amet in elit.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac venenatis eros. 
            Praesent et purus nec arcu viverra consequat. Sed cursus magna et ligula sodales, 
            vel vehicula orci commodo. Duis tincidunt est eu nunc vulputate, nec ornare eros luctus. 
            Maecenas ut risus eget nunc dignissim aliquet sit amet in elit.
          </p>
          <button className="btn btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default PersonDetails;
