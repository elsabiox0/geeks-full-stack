import React from 'react';

const BootstrapCard = (props) => {
  return (
    <div className="card m-3" style={{ width: '30rem' }}> {/* Adjusted margin for better spacing */}
      <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.buttonUrl} className="btn btn-primary">{props.buttonLabel}</a>
      </div>
    </div>
  );
};

export default BootstrapCard;