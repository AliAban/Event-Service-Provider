import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
        <nav className="bg-dark navbar-dark ">
            <div className="container-fluid d-flex px-5 justify-content-between">
                <div style={{width:"clamp(2rem, 10vw, 7.5rem)"}} className="">
                    <a><img src="/logo(highResolution).png" style={{maxWidth:"100%"}} alt="" /></a>
                </div>
                <ul className="d-flex  align-items-center">
                    <li><a href=""><i class="fi fi-rr-home"></i></a></li>
                    <li className="mx-5"><a href=""><i class="fi fi-rr-user"></i></a></li>
                    <li><a href=""><i class="fi fi-rr-shopping-cart"></i></a></li>
                </ul>
            </div>
        </nav>
    );
  }
}
