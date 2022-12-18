import React, { Component } from "react";

export default class Navbar extends Component {
  
  render() {
    return (
      <>
        <div className="container-fluid rounded-bottom" id="mobileLogo">
            <div style={{ width: "clamp(2rem, 30vw, 6.5rem)" }}>
              <a>
                <img
                  src="/logo(highResolution).png"
                  style={{ maxWidth: "100%" }}
                  alt=""
                />
              </a>
            </div>
        </div>
        <nav className="nav navbar border-bottom" id="navigationBar">
          <div className="container-fluid d-flex px-5 justify-content-between">
            <div style={{ width: "clamp(2rem, 10vw, 7.5rem)" }} id="logoImage">
              <a>
                <img
                  src="/logo(highResolution).png"
                  style={{ maxWidth: "100%" }}
                  alt=""
                />
              </a>
            </div>
            <ul className="d-flex  align-items-center" id="navigationContainer">
              <li>
                <a href="" title="Home Page">
                  <i className="fi fi-rr-home"></i>
                </a>
              </li>
              <li className="mx-5">
                <a href="" title="Profile">
                  <i className="fi fi-rr-user"></i>
                </a>
              </li>
              <li>
                <a href="" title="Cart">
                  <i className="fi fi-rr-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }
}
