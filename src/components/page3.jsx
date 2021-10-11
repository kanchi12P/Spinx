import React from "react";
import {Grid,Paper} from '@material-ui/core';
import "./page3.css"
import img1 from "../images/pg3img1.png"
import img2 from "../images/pg3img2.png"
import img3 from "../images/pg3img3.png"
import img4 from "../images/pg3img4.png"
function PageThree(){
    return(
        <div>
            <h3 style={{textAlign:"center", backgroundColor:"green"}}>RECENT WORK</h3>
            <h5 >We have a deep understanding of user habits and behaviors. We are committed to using 
                fact-based knowledge and our unique brand of innovation to help you dominate the competition.
                 Every project is customized for optimum visibility and audience response.
            </h5>   
            <Grid container spacing={4}>
            <Grid className=" container"  item xs={6}>
            <div class="container">
  <img src={img1} alt="img" class="image" />
  <div class="middle">
    <div class="text">CREATING A BETTER <br/>CALIFORNIA WITH THE<br/>CALIFORNIA ENDOWMENT</div>
    <button className="btn">Explore Project</button>
  </div>
</div>
            </Grid>
             <Grid className="div2 container" item xs={6}>
             <div class="container">
  <img src={img2} alt="img" class="image" />
  <div class="middle">
    <div class="text">LIGHTING UP AN INTERNET <br/>PRESENCE FOR BEGA</div>
    <button className="btn">Explore Project</button>
  </div>
</div>
             </Grid> 
             <Grid item xs={6}>
             <div class="container">
  <img src={img3} alt="img" class="image" />
  <div class="middle">
    <div class="text">A MEDICAL CONSULTING<br/> GROUP'S WEBSITE GOES <br/>UNDER THE KNIFE</div>
    <button className="btn">Explore Project</button>
  </div>
</div>
            </Grid>
             <Grid item xs={6}>
             <div class="container">
  <img src={img4} alt="img" class="image" />
  <div class="middle">
    <div class="text">PRODUCING A NEW VIDEO <br/>SPEC MARKETPLACE</div>
    <button className="btn">Explore Project</button>
  </div>
</div>
             </Grid>  
             </Grid> 
             <button className="btn" style={{margin:"1cm", marginLeft:"45%", fontSize:"20px"}}>View More Project</button>    
            </div>
    )
}
export default PageThree;
