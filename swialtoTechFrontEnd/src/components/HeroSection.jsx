import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{ marginTop: '3rem' }}>
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active" style={{objectFit:'contain'}}>
          <img
            src="assets/images/banner-4.jpg"
            className="d-block w-100"
            alt="First slide"
            style={{ objectFit: 'cover', height: '100vh' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>First Slide Label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="assets/images/banner-3.jpg"
            className="d-block w-100"
            alt="Second slide"
            style={{ objectFit: 'cover', height: '100vh' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Second Slide Label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="assets/images/banner-2.jpg"
            className="d-block w-100"
            alt="Third slide"
            style={{ objectFit: 'cover', height: '100vh' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Third Slide Label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default HeroSection;
