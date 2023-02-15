import React, { Component } from "react";

const Footer = ()=>{

    return (
      <footer className="footer  py-5 text-black bg-white dark:text-white dark:bg-slate-800">
        <ul className="flex justify-center border-b ">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">© 2023 Company, Inc</p>
      </footer>
    );
  
}

export default Footer;