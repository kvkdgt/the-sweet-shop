import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const updateActive = ()=>{
    if(window.location.pathname == '/'){
      setActive('home')
    }
    if(window.location.pathname == '/product/dryfruit-sweets'){
      setActive('dryfruit-sweets')
      
  }}
  return (
    <div>
      <div className="main-header">
        <div className="subHeader">
          Welcome to the official site of{" "}
          <b style={{ color: "yellow" }}>The Sweet Shop</b>
        </div>
        <header>
          <div class="logo">
            <Link to="/">
              <div class="site-name">The Sweet Shop</div>
            </Link>
          </div>
          <div class="option-list">
            <Link to="/">
              <span  className={active == 'home' ? 'options active' : 'options'}>Home</span>
            </Link>
            <Link to="/product/dryfruit-sweets"><span className='options'>Dryfruit Sweets</span></Link>
            <Link to="/product/pure-ghee-sweets"><span className="options">Pure Ghree Sweets</span></Link>
             <Link to="/product/bengali-sweets"><span className="options">Bengali Sweets</span></Link>
             <Link to="/product/mava-sweets"><span className="options">Mava Sweets</span></Link>
             <Link to="/product/namkeen"><span className="options">Namkeen</span></Link>
             <Link to="/product/"><span className="options">About US</span></Link>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
