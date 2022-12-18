import React, { Component } from "react";

export default class ServiceCategories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [
        { img: "/Event-Planner.png", content: "Event Planner" },
        { img: "/decorations.png", content: "Event Planner" },
        { img: "/catering.png", content: "Catering" },
        { img: "/musician.png", content: "Musicians" },
        { img: "/vehicle.png", content: "Rent Vehicles" },
      ],
    };
  }
  render() {
    return (
        <div className="container-fluid py-2 text-center">
          <h1 className="my-3" id="heading">Services We Provide</h1>
          <div className="row d-flex justify-content-center">
            {this.state.categories.map((catego) => {
              return (
                <div className="col-md-4 col-sm-6 d-flex justify-content-center my-2 mx-4 d-flex justify-content-center" key={catego.img}>
                  <a href="" className="categoriesImg">
                    <div
                      className="card  d-flex justify-content-center align-items-center"
                      style={{
                        width: "clamp(18rem,30vw, 25rem",
                        backgroundColor: "transparent",
                      }}
                    >
                      <img
                        src={catego.img}
                        className="card-img-top rounded"
                        style={{
                          height: "clamp(200px, 20vw, 20rem)",
                          maxWidth: "100%",
                        }}
                        alt="..."
                      />
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
    );
  }
}
