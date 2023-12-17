import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavBar.css";
import SideBar from "../sideBar/SideBar";
import SearchInput from "./SearchInput";
import Admin from "./Admin";
import { useCartItemsNumber } from "../../contextApi/CartItemsNumberContext";
import { useAccessToken } from "../../contextApi/AccessTokenContext";
import DropDown from "./DropDown";

const NavBar = ({ isSearching, setIsSearching }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [gender, setGender] = useState("");

  // let accessToken = localStorage.getItem("accessToken");
  // const cartItemsNumber = localStorage.getItem('cartItems');

  const { cartItemsNumber, setCartItemsNumber } = useCartItemsNumber();

  const { accessToken } = useAccessToken();
  // console.log('cartNumber',cartItemsNumber);

  // console.log('accessToken' ,accessToken);

  const handleMenuBarClick = () => {
    setShowMenu(!showMenu);
    // console.log('clicked');
  };
  const handleMouseIn = (gender) => {
    setShowDropdown(true);
    setGender(gender);
    // console.log(gender);
  };
  const handleMouseOut = (e) => {
    setShowDropdown(false);
  };
  console.log(gender);
  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="navbar-left-items">
          <Link to="/">
            <img
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
              alt="logo"
              className="logo"
            />
          </Link>
          <div
            className="menu"
            onMouseEnter={handleMouseIn}
            onMouseLeave={handleMouseOut}
            // onClick={handleMouseIn}
          >
            <Link
              to="/"
              className="navbar-item"
              // onMouseEnter={() => handleMouseIn("Men")}
              // onMouseLeave={()=>handleMouseOut('men')}
            >
              MEN
            </Link>
            {showDropdown && <DropDown gender={gender} />}
          </div>

          {/* <Link
            to="/"
            className="navbar-item"
            onMouseEnter={()=>handleMouseIn('Men')}
            // onMouseLeave={()=>handleMouseOut('men')}
          >
            MEN
          </Link> */}
          {/* <Link
            to="/"
            className="navbar-item"
            onMouseEnter={()=>handleMouseIn('Women')}
            // onMouseLeave={handleMouseOut}
          >
            WOMEN
          </Link> */}
          {/* {showDropdown && <DropDown gender={gender}/>} */}
        </div>

        <div className="mobile-screen-menu">
          <MenuIcon className="menubar-icon" onClick={handleMenuBarClick} />
          <Link to="/">
            <img
              src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg"
              alt="smallscreen-logo"
            />
          </Link>
        </div>

        <div className="navbar-right-items">
          <SearchInput
            isSearching={isSearching}
            setIsSearching={setIsSearching}
          />
          {accessToken ? (
            <Admin />
          ) : (
            <Link to="/Login" className="navbar-item">
              Login
            </Link>
          )}

          <Link
            to={accessToken === "" ? "/login" : "/wishlist"}
            className="navbar-item"
          >
            <FavoriteBorderIcon />
          </Link>
          <Link
            to={accessToken === "" ? "/login" : "/cart"}
            className="navbar-item"
          >
            <ShoppingBagOutlinedIcon />
            {cartItemsNumber > 0 && accessToken != "" && (
              <span className="navbar-cart-items-number">
                {cartItemsNumber}
              </span>
            )}
          </Link>
        </div>
        {showMenu && <SideBar handleMenuBarClick={handleMenuBarClick} />}
      </div>
    </div>
  );
};

export default NavBar;
