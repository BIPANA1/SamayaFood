import React from 'react';
import './css/services.css'
import delivery from '../images/deli.png';
import foodOrdering from '../images/foodorder.jpg';
import fooddelivery from '../images/delser.jpg';
const Services = () => {
  return (
    <div className='services'>
      <h1 className='service-h1'>Our Services</h1>
      <img className='img-deli'  src={delivery} alt='service'></img>
       <h2 className='service-h2'>Home Delivery Service</h2>
      <p className='services-des1'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>

    <div className='foodordering'>  <img className='food-orderingPic'  src={foodOrdering} alt='service'></img>
    <h2 className='food-h2'>Food Ordering Service</h2>
   <p className='food-des1'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
 </div>
 <div className='fooddelivery'>  <img className='food-deliveryPic'  src={fooddelivery} alt='service'></img>
    <h2 className='food-h3'> 24 hrs Delivery Service</h2>
   <p className='food-des2'> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>
</div>
 </div>
  );
};

export default Services;
