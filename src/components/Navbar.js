import React from "react";
import "./css/Navbar.css";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';



export default function Navbar() {
  return (
    <div className="navbar">
      
      <img
        className="navbar_logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"

      />
       

      <div className="navbar_search">
        <input type="text" className="navbar_searchIn" />
          <SearchIcon className="navbar_searchIcon"/>
      </div>

      <div className="navbar_navOpt">
        <div className="navbar_option">
          <span className="navbar_optionLine">Home</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_optionLine"> Account</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_optionLine"> contact</span>
        </div>
        <div className="navbar_option">
          <span className="navbar_optionLine">About</span>
        </div>
        <div className="navbar_cart">
          <ShoppingBasketIcon   />
          <span className="navbar_optionLine navbar_cart_basket">0</span>
        </div>
      </div>
    </div>
  );
}


