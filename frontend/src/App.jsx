import React, { Component } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ServiceCategories from "./components/ServiceCategories";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     show: true,
  //     lastScroll: 0,
  //   };
  // }

  // controlNavbar = () => {
  //   if (typeof window !== "undefined") {
  //     if (window.scrollY > lastScrollY) {
  //       // if scroll down hide the navbar
  //       setShow(false);
  //     } else {
  //       // if scroll up show the navbar
  //       setShow(true);
  //     }

  //     // remember current page location to use in the next move
  //     setLastScrollY(window.scrollY);
  //   }
  // };

  return (
    <div>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<ServiceCategories />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};
export default App;
