import React from 'react';
import {Grid,Paper} from '@material-ui/core';
import 'animate.css'
import One from "./one"
import Two from "./two"
import Three from "./three"
import Four from "./four"
function PageFive () {
  

    return (
        <div className="page2">
            <Grid container spacing={1}>
        
        <Grid item xs={4}>
         <One />
        </Grid>
        <Grid item xs={8}>
      <Two />
        </Grid>
        <Grid item xs={8}>
      <Three/>
        </Grid>
        <Grid item xs={4}>
         <Four/>
        </Grid>
       
      </Grid>
      
               
            
           </div> 
    )
    
}
export default PageFive;