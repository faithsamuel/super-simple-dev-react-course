import React, { useState } from "react";
import "../components/header.css";
import { NavLink } from "react-router";
import WhiteLogo from "../assets/images/logo-white.png";
import WhiteMobileLogo from "../assets/images/mobile-logo-white.png";

export function Header({ cart }) {
  let totalQuantity = 0;

  const [search, setSearch] = useState("");

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  const updateSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const searchProducts = () => {
    console.log(search);
  };
  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo" src={WhiteLogo} />
          <img className="mobile-logo" src={WhiteMobileLogo} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={updateSearchInput}
        />

        <button className="search-button" onClick={searchProducts}>
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">
          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
