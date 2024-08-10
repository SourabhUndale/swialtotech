import React from "react";

const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
];

const OurCategories = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center p-4">Our Categories</h2>
      <div className="row">
        {categories.map((category) => (
          <div className="col-md-4 mb-4" key={category.id}>
            <div className="category-box">
              <div className="category-content">
                <span className="category-text">{category.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCategories;
