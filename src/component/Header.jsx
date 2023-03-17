import React from "react";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./navbar.css";
const Header = () => {
  return (
    <>
      <div className="navbar">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="cart">
            <BsCart3 color="aliceblue" size={27} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
