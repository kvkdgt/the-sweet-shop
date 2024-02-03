import React, { useEffect, useState } from "react";
import "./Navbar.css";


const Navbar = () => {
  

  return (
    <div>
      <div className="main-header">
        <div className="subHeader">
            Welcome to the official site of <b style={{color:"yellow"}}>The Sweet Shop</b>
        </div>
      <header >
        <div class="logo">
          <div class="site-name">The Sweet Shop</div>
        </div>
        <div class="option-list">
          <span className="options active">Home</span>
          <span className="options">Dryfruit Sweets</span>
          <span className="options">Pure Ghree Sweets</span>
          <span className="options">Bengali Sweets</span>
          <span className="options">Mava Sweets</span>
          <span className="options">Namkeen</span>
          <span className="options">About US</span>
        </div>
      </header>
      </div>
      
    </div>
  );
};

export default Navbar;
