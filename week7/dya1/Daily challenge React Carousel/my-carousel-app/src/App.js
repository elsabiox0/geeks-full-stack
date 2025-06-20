// src/App.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel specific styles
import './App.css'; // For basic app styling (optional, but used for carousel container)

function App() {
  // Array of image data for the carousel
  const images = [
    {
      src: 'istockphoto-1394385528-1024x1024.jpg',
      alt: 'Hong Kong skyline with traditional boat',
      legend: 'Hong Kong - Vibrant Cityscape',
    },
    {
      src: 'istockphoto-474557514-1024x1024.jpg',
      alt: "Ruins of St. Paul's, Macao",
      legend: "Macao - Historic Ruins of St. Paul's",
    },
    {
      src: 'istockphoto-1003196328-1024x1024.jpg',
      alt: 'Mount Fuji and Chureito Pagoda, Japan',
      legend: 'Japan - Majestic Mount Fuji',
    },
    {
      src: 'istockphoto-614973464-1024x1024.jpg',
      alt: 'Las Vegas Strip at night',
      legend: 'Las Vegas - The Entertainment Capital',
    },
  ];

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center min-vh-100 bg-light p-4">
      <h1 className="mb-4 text-center text-primary">Explore the World!</h1>

      {/* Carousel Component */}
      <div className="carousel-container shadow-lg rounded-3 overflow-hidden">
        <Carousel
          showArrows={true}
          showStatus={true}
          showIndicators={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          transitionTime={500}
          swipeable={true}
          emulateTouch={true}
          stopOnHover={true} // Stop autoplay on hover
          useKeyboardArrows={true} // Allow navigation with keyboard arrows
        >
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
                style={{ maxHeight: '600px', objectFit: 'cover' }}
              />
              <p className="legend">{image.legend}</p>
            </div>
          ))}
        </Carousel>
      </div>

      <p className="mt-4 text-secondary text-center">
        A responsive image carousel built with React and <code>react-responsive-carousel</code>.
      </p>
    </div>
  );
}

export default App;
