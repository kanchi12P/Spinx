import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import "./slider.css"

function Slider(){
    return (
      <Carousel showThumbs={false} infiniteLoop={true}>
        <div className="slide1" style={{ height: "500px"}}><b>QUIN EMMANUEL</b></div>
        <div className="slide2"style={{ height: "500px"}}><b>PHYSICIANS FORMULA</b></div>
        <div className="slide3" style={{ height: "500px" }}><b>AIYA AMERICA</b></div>
      </Carousel>
    )
  }

  export default Slider;