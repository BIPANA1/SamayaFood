import React from "react";
// import SearchBar from "../components/SearchBar";
import "../pages/css/Home.css";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <div className="background-image"></div>
      <div className="content">
        <h1>Experience The Flavor of Samaya</h1>
        <h2>Delivered To Your Doorstep</h2>
      
       {/* <div className="Container">
        <div className="vertical-center"> */}
       <ul>
      <button className="button">  <Link to="/menu">Order Now</Link>  </button>
        </ul>
       </div>
       </div>

    //   </div>
    // </div>
  );
};

export default Home;
