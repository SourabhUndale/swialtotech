import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = ({ addToCart }) => {
  return (
    <div className="container mt-4">
      <h2 className="text-center p-4">Our Products</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="image-container">
              <img
                src="assets/images/product-1.jpg"
                className="card-img-top"
                alt="Product 1"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Murti</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span className="card-text">1500</span>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart({ id: 1, name: 'Product 1', price: 10 })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="image-container">
              <img
                src="assets/images/product-2.jpg"
                className="card-img-top"
                alt="Product 2"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Pendant</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span className="card-text">1500</span>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart({ id: 2, name: 'Product 2', price: 20 })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="image-container">
              <img
                src="assets/images/product-7.jpg"
                className="card-img-top"
                alt="Product 3"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">T-Shirt</h5>
              <div className="d-flex justify-content-between align-items-center">
                <span className="card-text">1500</span>
                <button
                  className="btn btn-primary"
                  onClick={() => addToCart({ id: 3, name: 'Product 3', price: 30 })}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
