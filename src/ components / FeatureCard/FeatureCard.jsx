import React from 'react';
import "./FeatureCard.css";

function FeatureCard(props) {
  console.log(props);
  return( 
    <div className="feature-card-container">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </div>
  );
}

export default FeatureCard;
 