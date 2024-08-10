import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="container mb-5 cus-product" style={{marginTop:'4rem'}}>
      <div className="row">
        {/* Left Side: Image Slider */}
        <div className="col-md-6" style={{marginTop:'4rem'}}>
          <div id="productCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://via.placeholder.com/600x400?text=Product+Image+1"
                  className="d-block w-100"
                  alt="Product 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/600x400?text=Product+Image+2"
                  className="d-block w-100"
                  alt="Product 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://via.placeholder.com/600x400?text=Product+Image+3"
                  className="d-block w-100"
                  alt="Product 3"
                />
              </div>
            </div>
            <a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        {/* Right Side: Product Info */}
        <div className="col-md-6">
          <h2 className="mt-4">Product Name</h2>
          <ul className="list-unstyled mt-3 product-points">
            <li><i className="fas fa-check-circle text-success"></i> Key Point 1</li>
            <li><i className="fas fa-check-circle text-success"></i> Key Point 2</li>
            <li><i className="fas fa-check-circle text-success"></i> Key Point 3</li>
          
          </ul>
          <h4 className="mt-4">Price: $50.00</h4>

          {/* Quantity Selector */}
          <div className="d-flex align-items-center mt-3">
            <label className="mr-3">Quantity:</label>
            <input
              type="number"
              className="form-control w-25"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
          </div>

          {/* Add to Cart Button */}
          <button className="btn btn-primary mt-3">Add to Cart</button>

          <ul className="list-unstyled mt-3 product-points">
            <li><i className="fas fa-check-circle text-success"></i> Key Point 1</li>
            <li><i className="fas fa-check-circle text-success"></i> Key Point 2</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
