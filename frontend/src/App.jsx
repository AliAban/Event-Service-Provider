import React, { Component } from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import ServiceCategories from './components/ServiceCategories'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      show : true,
      lastScroll: 0
    }
  }
  
  controlNavbar = ()=>{
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  }

  render() {
    return (
      <>
      <Navbar/>
      <ServiceCategories/>
      <Footer/>
     </>
    )
  }
}

