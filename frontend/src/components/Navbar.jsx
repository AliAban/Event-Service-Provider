import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid rounded-bottom" id="mobileLogo">
        <div style={{ width: "clamp(2rem, 30vw, 6.5rem)" }}>
          <a>
            <img
              src="/logos/logo(white-text).png"
              style={{ maxWidth: "100%" }}
              alt=""
            />
          </a>
        </div>
      </div>
      <nav className="nav fixed-top bg-light" id="navigationBar">
        <div className="container-fluid d-flex px-5 justify-content-between">
          <div style={{ width: "clamp(2rem, 40vw, 20rem)" }} id="logoImage">
            <a>
              <img
                src="/logos/logo(red-text).png"
                style={{ maxWidth: "100%" }}
                alt=""
              />
            </a>
          </div>
          <ul className="d-flex  align-items-center" id="navigationContainer">
            <li>
              <Link to={"/login"}>
                <button className="btn btn-info mx-2">Login</button>
              </Link>
            </li>
            <li>
              <Link to={"/signup"}>
                <button className="btn btn-info">Signup</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
