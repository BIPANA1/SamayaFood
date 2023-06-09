import React from 'react';
import './css/about.css';
import aboutimage from '../images/banner.jpeg';
const About = () => {
  return (
    <div className="about-us-container">
      <h1 className='about-h1'>About Us</h1>
      <div className="about-image">
        <img src={aboutimage} alt="About Us" />
      </div>
      <div className="about-text">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut turpis vitae nulla commodo placerat eu vitae metus. Fusce luctus metus ut mauris fermentum, vel ultricies nunc tincidunt. Morbi facilisis commodo tellus, vel varius quam commodo sit amet. Aliquam et elit vel elit tristique dictum eu vel lorem. Duis sed quam sapien.</p>
        <p>Phasellus et sagittis nisi. Sed efficitur, tortor nec blandit elementum, massa velit consectetur enim, nec rhoncus est lorem vitae enim. Vivamus blandit nunc vel aliquet venenatis. Morbi faucibus, felis nec lobortis volutpat, est mi commodo odio, a lacinia tellus metus quis enim. Sed a massa libero. Donec vitae velit sapien. Nam eu velit neque.</p>
      </div>
    </div>
  );
};


export default About;
