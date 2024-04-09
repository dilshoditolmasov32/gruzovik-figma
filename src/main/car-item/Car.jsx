import React from "react";
import "./Car.css";
import car from "../../assests/images/car.svg";

const Car = () => {
  return (
    <div className="car-section">
      <div className="container">
        <img src={car} alt="car" />
      </div>
    </div>
  );
};

export default Car;
