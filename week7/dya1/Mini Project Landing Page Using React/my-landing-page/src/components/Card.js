import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = (props) => {
  return (
    <div className="col-md-4 col-sm-6 mb-4"> {/* Bootstrap grid: 4 units on md+, 6 on sm+ */}
      <div className="card h-100 shadow-sm text-center p-3">
        <div className="card-body d-flex flex-column justify-content-between"> {/* Flexbox for content distribution */}
          {props.icon && (
            <div className="icon-wrapper mb-3">
              <FontAwesomeIcon icon={props.icon} size="3x" className="text-primary" />
            </div>
          )}
          <div> {/* Group title and description */}
            <h5 className="card-title text-dark mb-2">{props.title}</h5>
            <p className="card-text text-secondary">{props.description}</p>
          </div>
          {props.link && (
            <a href={props.link} className="btn btn-outline-primary btn-sm mt-3">Learn More</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;