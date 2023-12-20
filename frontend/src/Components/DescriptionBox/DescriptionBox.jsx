import React from 'react';
import './DescriptionBox.css';

export const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>an ecommerce website is online platfrom for buying and selling </p>
            <p>It display product description about products </p>
        </div>
    </div>
  )
}
