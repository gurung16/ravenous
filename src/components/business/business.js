import React from 'react';
import './business.css';

class Business extends React.Component{
    render(){
      const {business} = this.props;
        return(
        <div className="Business">
        <div className="image-container">
        <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{business.address}</p>
            <p>{business.city}</p>
             <p>{business.state} {business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{business.category}</h3>
            <h3 className="rating">{business.rating} stars</h3>
        <p>{business.reviewCount} Reviews</p>
          </div>
        </div>
      </div>)
    }
}

export default Business;
