import "./Nav.css";
import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-sam">
        {" "}
        <h1>Samaya</h1>{" "}
      </div>

      <div class="nav-items">
        <ul>
          <Link to="/home">Home</Link>
        </ul>
        <ul>
          <Link to="/menu">Menu</Link>
        </ul>
        <ul>
          <Link to="/services">Services</Link>
        </ul>
        <ul>
          <Link to="/about">AboutUs</Link>
        </ul>
        <div class="log-In">
          <ul>
            <Link to="/login"> LogIn </Link>
          </ul>
          <ul>
            <Link to="/signup"> SignUp </Link>
          </ul>
          <Link to="/cart" className="cart-link cart-trolley--link"> 
          <FiShoppingCart className="cart-trolley"/>
          <span className="cart-total"> 10</span>
          </Link>
          
          <ul>
            <Link to="/book"> Add Menu </Link>
          </ul>

        </div>
      </div>
    </div>
  );
};
export default Navbar;
