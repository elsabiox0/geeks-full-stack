import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 text-dark">Get in Touch With Us</h2>
        <div className="row justify-content-center"> {/* Center content */}
          <div className="col-lg-6 col-md-8"> {/* Column width for larger screens */}
            <h4 className="mb-3">Contact Information</h4>
            <p className="text-secondary mb-4">
              Feel free to reach out to us for any inquiries, support, or collaboration opportunities. We are always here to help!
            </p>
            <ul className="list-unstyled">
              <li className="mb-3">
                <FontAwesomeIcon icon={faEnvelope} className="me-3 text-primary fa-lg" />
                <a href="pedro404@gmail.com" className="text-decoration-none text-dark">info@yourcompany.com</a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faPhone} className="me-3 text-primary fa-lg" />
                <a href="tel:+1234567890" className="text-decoration-none text-dark">+1 (234) 567-890</a>
              </li>
              <li className="mb-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-3 text-primary fa-lg" />
                123 Responsive Street, Web City, 98765, Internet
              </li>
            </ul>

            <h4 className="mt-5 mb-3">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Your Message</label>
                <textarea className="form-control" id="message" rows="5" placeholder="Type your message here..."></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;