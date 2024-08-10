import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AboutUs = () => {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">About Us</h2>

      {/* Spiritual Mission Section */}
      <div className="row mb-5">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/600x400?text=Our+Mission"
            alt="Our Mission"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h3>Our Spiritual Mission</h3>
          <p>
            Our mission is to guide individuals on a path of spiritual awakening
            and inner peace. We believe that true enlightenment comes from
            within, and our teachings are designed to help you discover your
            true self. Through meditation, mindfulness, and a deep connection
            with the universe, we aim to bring harmony to your mind, body, and
            spirit.
          </p>
        </div>
      </div>

      {/* Our Journey Section */}
      <div className="row mb-5">
        <div className="col-md-6 order-md-2">
          <img
            src="https://via.placeholder.com/600x400?text=Our+Journey"
            alt="Our Journey"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6 order-md-1">
          <h3>Our Journey</h3>
          <p>
            Our journey began with a vision to create a community centered
            around love, compassion, and spiritual growth. Over the years, we
            have connected with thousands of individuals seeking deeper meaning
            in their lives. Our teachings are inspired by ancient wisdom and
            modern practices, creating a holistic approach to spirituality.
          </p>
        </div>
      </div>

      {/* Teachings & Values Section */}
      <div className="row mb-5">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Our Teachings & Values</h3>
          <p>
            We believe in the power of meditation, mindfulness, and
            self-discovery. Our teachings are rooted in universal truths that
            transcend all religions and beliefs. We value love, peace,
            compassion, and the interconnectedness of all beings. Our community
            is open to everyone, regardless of background or faith, and we
            strive to create a space where individuals can explore their
            spirituality freely.
          </p>
        </div>
      </div>

      {/* Meet the Founders Section */}
      {/* <div className="row mb-5">
        <div className="col-md-12">
          <h3 className="text-center mb-4">Meet Our Founders</h3>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/200x200?text=Founder+1"
            alt="Founder 1"
            className="img-fluid rounded-circle mb-2"
          />
          <h5>Sage John</h5>
          <p>Founder & Spiritual Guide</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/200x200?text=Founder+2"
            alt="Founder 2"
            className="img-fluid rounded-circle mb-2"
          />
          <h5>Mystic Jane</h5>
          <p>Co-Founder & Meditation Teacher</p>
        </div>
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/200x200?text=Founder+3"
            alt="Founder 3"
            className="img-fluid rounded-circle mb-2"
          />
          <h5>Healer Mike</h5>
          <p>Energy Healer & Life Coach</p>
        </div>
      </div> */}

      {/* Call to Action Section */}
      <div className="row">
        <div className="col-md-12 text-center">
          <h4>Join Us on a Spiritual Journey</h4>
          <p>
            We invite you to explore our teachings and join our community of
            like-minded individuals. Together, we can find peace, love, and
            enlightenment.
          </p>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
