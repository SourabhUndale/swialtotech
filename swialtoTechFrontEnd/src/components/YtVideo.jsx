import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const videos = [
  { id: 1, title: 'Video 1', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, title: 'Video 2', url: 'https://www.youtube.com/embed/oHg5SJYRHA0' },
  { id: 3, title: 'Video 3', url: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 4, title: 'Video 4', url: 'https://www.youtube.com/embed/oHg5SJYRHA0' },
];

const YtVideo = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center p-4">Our Videos</h2>
      <div className="row">
        {videos.map((video) => (
          <div className="col-md-6 mb-4" key={video.id}>
            <div className="video-box">
              <h5 className="video-title">{video.title}</h5>
              <div className="embed-responsive embed-responsive-16by9 video-wrapper">
                <iframe
                  className="embed-responsive-item video-iframe"
                  src={video.url}
                  allowFullScreen
                  title={video.title}
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YtVideo;
