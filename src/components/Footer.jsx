import React from "react";
import "./footer.css";
import {Grid,Paper} from '@material-ui/core';

function Foot() {
    return (
        <div className="footer" id="footer">
            <Grid container spacing={3}>
        
        <Grid item xs={5}>
          <div className="paper" >
          <h2 style={{backgroundColor:"white"}}>Contact Us</h2>
          <form className="form"><input type="text" className="form-control" placeholder="First Name"/>
                <input type="text" className="form-control" placeholder="Last Name"/> 
                <input type="email"  className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                <input type="text" className="form-control" placeholder="Commpany Name"/> 
                <input type="number" className="form-control" placeholder="Phone Number"/> 
                <textarea id="exampleMessage" className="form-control" placeholder="Message"></textarea>
                <button className="but" style={{marginLeft:"5cm"}} type="button" >Send</button>
                </form>
          </div>
        </Grid>
        <Grid item xs={7}>
          
          <div >
                <ul style={{listStyleType:"none"}}>
                            <li><h1 style={{backgroundColor:"white"}}>ENGAGE AND EXPERIENCE</h1></li>
                            <li><a ><h2 style={{backgroundColor:"white"}}>213.894.9933</h2></a></li>
                            <li><a><h2 style={{backgroundColor:"white"}}>911 W. Washington Blvd.
Los Angeles, CA 90015 U.S.A</h2></a></li>

                            <li> <a href=""><h2 style={{backgroundColor:"white"}}> hello@spinx.com</h2></a>  </li>
                           
                        </ul>
                    </div>
        
        </Grid>
        
        
      </Grid>
           </div> 
    )
}
export default Foot;