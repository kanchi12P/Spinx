import React from "react";
import {Grid,Paper} from '@material-ui/core';
import Slider from "./slider"

function PageTwo() {
    return (
        <div className="page2" style={{margin:"1cm", backgroundColor:"black"}}>
            <Grid container spacing={3}>
        
        <Grid item xs={6} >
          <div  >
         <h1 style={{color:"white"}}>
             THINK 
         </h1><h1 style={{color:"green"}}>
             BIG 
         </h1>
         <h3 style={{color:"white"}}>Web Design Company in Los Angeles</h3>
         <h4 style={{color:"white"}}>At SPINX Digital, our team of innovators and digital marketers in tech and design bring skills above and beyond the ordinary to every project. Our Los Angeles web design and development team is involved in professional B2B and B2C web design and development, mobile applications, digital strategy, user experience, advertising, social media, content management systems, and email marketing initiatives.</h4>
          <h3 style={{color:"white"}}>AWARD WINNING DIGITAL AGENCY</h3></div>
        </Grid>
        <Grid item xs={6}>
        <Slider />
        </Grid>
        
       
      </Grid>
      
               
            
           </div> 
    )
}
export default PageTwo;