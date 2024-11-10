import React from 'react';
import Image from "next/image";
import { images } from "..";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";
import { GiSteeringWheel } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";
import "./style.css"

export default function Cards() {
  return (
    <div className="card-container">
      <h2 className="card-title">Ford Mustang</h2>
      <h5 className="card-subtitle">Sports</h5>
      <Image src={images.car1} height={500} width={350} className="card-image" />
      
      {/* Fueling section */}
      <div className="card-details">
        <div className="card-detail-item">
          <BsFillFuelPumpDieselFill />
          <h4>Diesel</h4>
        </div>
        <div className="card-detail-item">
          <GiSteeringWheel />
          <h4>Manual</h4>
        </div>
        <div className="card-detail-item">
          <IoIosPeople />
          <h4>4 People</h4>
        </div>
        <div className="card-detail-item">
          <IoSpeedometerOutline />
          <h4>1270 km</h4>
        </div>
      </div>
      
      {/* Divider and footer section */}
      <hr className="card-divider" />
      <div className="card-footer">
        <h2 className="card-price">$175.60</h2>
        <button className="card-button">View More</button>
      </div>
    </div>
  );
}
