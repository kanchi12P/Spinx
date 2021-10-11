import React from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

const Four = () => {
  return (
    <div style={{ height: "100vh" }}>
      <h1
        style={{ height: "300px", background: "teal" }}
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img  style={{ height: "300px",width:"100%" }}src="https://spinx-live-6jsc7gkvbdujvrbfu3miqzaj1t1.netdna-ssl.com/images/agile-methodology-for-design.jpg"/>
      </h1>
    </div>
  );
};

export default Four;