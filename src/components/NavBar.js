import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'

const NavBar = () => {
  return (
    <nav className="container-fluid ">
        <div className="logo-container">
      <Link to='/'>
<div style={{marginTop:'-25px'}}>
         <img src={logo} className=""/>


</div>
  </Link>
  <Link to='/' style={{textDecoration:'none',color:'#fff',fontSize:'1.5rem'}} >product</Link>
        </div>
        <Link to='/cart'>
                <button className="cart-button"> <i style={{marginRight:"5px",marginTop:'1px'}}  className="fa fa-shopping-cart fa-2x "></i>My Cart</button>

        </Link>
    
    </nav>
  );
};

export default NavBar;
