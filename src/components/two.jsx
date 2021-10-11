import React from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Two = () => {
  return (
    <div style={{ height: "100px" }}>
      <h1
        style={{ height: "300px", background: "grey",fontSize:"60px" }}
        data-aos="fade-left"
        data-aos-duration="3000"
      >
       “It’s kind of fun to do the impossible.”
      </h1>
    </div>
  );
};

export default Two;