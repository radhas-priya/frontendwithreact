import React from "react";
import './index.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">

            <img id="logo" src="images\FreshFarmslogo.png " alt=" " ></img>FreshFarms </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Contact">Info</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Shop">Shop</Link>
              </li>
            </ul>
            <form  className="d-flex">
            <Link className="btn btn-outline-light mx-3" to="/Signup" role = "button" >Cart</Link>
              <Link className="btn btn-outline-light mx-2" to="/Login" role = "button" >Login</Link>
              <Link className="btn btn-outline-light mx-2" to="/Signup" role = "button" >Signup</Link>
            </form>
          </div>
        </div>
      </nav>




    </>
  )
}
export default Navbar;