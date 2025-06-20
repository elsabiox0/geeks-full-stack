import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Contact from './components/Contact';
import './App.css'; // L-CSS dyalek l-khas

// Importi les icons dyal Font Awesome li ghadi tsta3mel f les Cards
import { faLightbulb, faCogs, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Header />

      {/* 1. Section Hero (Introduction) */}
      <section id="home" className="jumbotron jumbotron-fluid text-center bg-primary text-white py-5 d-flex align-items-center" style={{ minHeight: '60vh' }}>
        <div className="container">
          <h1 className="display-4 mb-3">Welcome to Our Awesome Landing Page</h1>
          <p className="lead mb-4">Discover the best solutions tailored for your success.</p>
          <a href="#contact" className="btn btn-light btn-lg">Get Started Today!</a>
        </div>
      </section>

      {/* 2. Section Features */}
      <section id="features" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 text-dark">Our Key Features</h2>
          <div className="row justify-content-center">
            <Card
              icon={faLightbulb}
              title="Innovative Ideas"
              description="We bring fresh and creative solutions to the table, ensuring your projects stand out with uniqueness."
              link="#"
            />
            <Card
              icon={faCogs}
              title="Robust Performance"
              description="Our solutions are built for speed, scalability, and reliability, delivering top-notch performance constantly."
              link="#"
            />
            <Card
              icon={faUsers}
              title="Dedicated Support"
              description="Our friendly and expert team is always ready to assist you with any questions or issues you may face."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* 3. Section Services */}
      <section id="services" className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 text-dark">What We Offer</h2>
          <div className="row justify-content-center">
             <Card
              icon={faStar} // Example of a different icon
              title="Custom Development"
              description="Tailored software solutions designed to meet your specific business requirements and goals."
              link="#"
            />
            <Card
              icon={faLightbulb}
              title="UI/UX Design"
              description="Creating intuitive and engaging user interfaces that provide exceptional user experiences."
              link="#"
            />
            <Card
              icon={faCogs}
              title="Consulting"
              description="Expert advice and strategic planning to guide your digital transformation journey from start to finish."
              link="#"
            />
          </div>
        </div>
      </section>


      {/* 4. Section Contact Us */}
      <Contact />

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">&copy; {new Date().getFullYear()} My Responsive Landing Page. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-white mx-2"><i className="fab fa-facebook-f"></i></a> {/* Example for social media icons (requires free-brands-svg-icons) */}
            <a href="#" className="text-white mx-2"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-white mx-2"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;