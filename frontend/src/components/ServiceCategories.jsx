import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faBook, faCarAlt, faBookReader, faBookAtlas, faBookJournalWhills, faCalendarAlt, faTable, faChair, faCakeCandles, faHeartCircleBolt, faEnvelope, faEnvelopeOpenText, faBowlFood, faPalette, faPlateWheat, faPastafarianism, faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { faBookmark, faBuilding, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faPage4, faPagelines } from "@fortawesome/free-brands-svg-icons";

const ServiceCategories = () => {
  const serviceCategoriesArray = [
    {
      icon: faMusic,
      type: "Music",
      backgroundColor: "#5BBA8B",
      iconColor: "white",
    },
    {
      icon: faCalendarAlt,
      type: "Event Planner",
      backgroundColor: "#008D9F",
      iconColor: "white",
    },
    {
      icon: faCarAlt,
      type: "Transport",
      backgroundColor: "#E93902",
      iconColor: "white",
    },
    {
      icon: faBuilding,
      type: "Venue / Halls",
      backgroundColor: "#FFC45A",
      iconColor: "white",
    },
    {
      icon: faChair,
      type: "Decorations",
      backgroundColor: "#EF6B20",
      iconColor: "white",
    },
    {
      icon: faEnvelopeOpenText,
      type: "Card Designers",
      backgroundColor: "#008D9F",
      iconColor: "white",
    },
    {
      icon: faPizzaSlice,
      type: "Catering",
      backgroundColor: "#5BBA8B",
      iconColor: "white",
    },
  ];
  return (
    <main className="container py-2 text-center serviceCategories">
      <h1 className="my-3" id="heading">
        Services We Provide
      </h1>

      <div className="category-container">
        {serviceCategoriesArray.map((category) => {
          let style = {
            backgroundColor: category.backgroundColor,
            color: category.iconColor,
          };
          return (
            <div className="category-items" key={category.type}>
              <div className="category-icon-container" style={style}>
                <FontAwesomeIcon
                  icon={category.icon}
                  style={style}
                  className="icon"
                ></FontAwesomeIcon>
              </div>
              <p className="category-text">{category.type}</p>
            </div>
          );
        })}
        
      </div>
    </main>
  );
};
export default ServiceCategories;
