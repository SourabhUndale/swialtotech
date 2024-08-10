import React from 'react';

const blogs = [
  { id: 1, title: 'Blog Post 1', info: 'Brief information about Blog Post 1.' },
  { id: 2, title: 'Blog Post 2', info: 'Brief information about Blog Post 2.' }
];

const HomeBlogs = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center p-4">Our Blogs</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-6 mb-4" key={blog.id}>
            <div className="blog-box">
              <h5 className="blog-title">{blog.title}</h5>
              <p className="blog-info">{blog.info}</p>
              <a href="#read-more" className="btn btn-primary">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlogs;
