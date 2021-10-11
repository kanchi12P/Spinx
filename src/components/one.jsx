import React from "react";

import AOS from "aos";
import "aos/dist/aos.css"; 
AOS.init();

const One = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h1
        style={{ height: "300px", background: "grey",fontSize:"40px"  }}
        data-aos="fade-right"
        data-aos-duration="3000"
      >
       Design is not what it looks and feels like, design is how it works.
      </h1>
    </div>
  );
};

export default One;