import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const handleDarkMode = () => {
  //   if (!localStorage.getItem("theme")) {
  //     localStorage.setItem("theme", "dark");
  //     document.documentElement.classList.add("dark");
  //     console.log(localStorage.getItem("theme"));
  //     console.log(document.documentElement.classList.contains("dark"));
  //   } else if (localStorage.getItem("theme")) {
  //     if (localStorage.getItem("theme") === "light") {
  //       localStorage.setItem("theme", "dark");
  //       document.documentElement.classList.add("dark");
  //       console.log(localStorage.getItem("theme"));
  //       console.log(document.documentElement.classList.contains("dark"));
  //     } else {
  //       localStorage.setItem("theme", "light");
  //       document.documentElement.classList.remove("dark");
  //       console.log(localStorage.getItem("theme"));
  //       console.log(document.documentElement.classList.contains("dark"));
  //     }
  //   }
  // };

  const handleDarkMode = () =>{
    setTheme(theme === "dark" ? "light": "dark");
  }

  // useEffect(() => {
  //   if (
  //     localStorage.theme === "dark" ||
  //     (!("theme" in localStorage) &&
  //       window.matchMedia("(prefers-color-scheme: dark)").matches)
  //   ) {
  //     document.documentElement.classList.add("dark");
  //     console.log(document.documentElement.classList);
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     console.log(document.documentElement);
  //   }
  // }, [localStorage.theme]);

  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
          document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div
        className="bg-white dark:bg-slate-800 dark:border-b-0 border-b-2 dark:text-white dark"
        id="mobileLogo"
      >
        <div className="d-flex md:px-40 sm:px-20 px-4 justify-content-between flex justify-between">
          <Link to={"/"}>
            <div id="logoImage" className="flex flex-col text-center">
              <h1 className="text-red-500 dark:text-white">
                E <span className="dark:text-red-500 text-black">S</span> P
              </h1>
              <h4 className="text-red-500 dark:text-white">
                Event <span className="dark:text-red-500 text-black">S</span>
                ervice Provider
              </h4>
            </div>
          </Link>
        </div>
      </div>

      {/* desktop navbar below */}
      <nav
        className="nav fixed-top z-10 bg-white dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0"
        id="navigationBar"
      >
        <div className="d-flex md:px-32 sm:px-16 px-4 justify-content-between flex justify-between">
          <Link to={"/"}>
            <div id="logoImage" className="flex flex-col text-center">
              <h1 className=" text-red-500 dark:text-white">
                E <span className="dark:text-red-500 text-black">S</span> P
              </h1>
              <h4 className="text-red-500 dark:text-white ">
                Event <span className="dark:text-red-500 text-black ">S</span>
                ervice Provider
              </h4>
            </div>
          </Link>
          <ul className="flex items-center" id="navigationContainer">
            <li>
              <Link to={"/login"}>
                <button className="text-white  bg-red-500 mx-1 rounded p-1">
                  Log in
                </button>
              </Link>
            </li>
            <li>
              <Link to={"/signup"}>
                <button className="text-white  bg-red-500 mx-1 rounded p-1">
                  Sign up
                </button>
              </Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faMoon}
                onClick={handleDarkMode}
              ></FontAwesomeIcon>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
