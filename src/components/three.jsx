import React from "react";

import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const Three = () => {
  return (
    <div style={{ height: "200px" }}>
      <h2
        style={{ height: "300px", background: "grey" ,fontSize:"60px"}}
        data-aos="fade-right"
        data-aos-duration="3000"
      >
       “Design is so simple. That’s why it’s so complicated.”
      </h2>
    </div>
  );
};

export default Three;