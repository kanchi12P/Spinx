import React from "react";
import Accordion from "react-bootstrap/Accordion";
import {Grid,Paper} from '@material-ui/core';
import "./page3.css"
import ima from "../images/ima.png";
function Acc(){
  return(
    <Grid container spacing={3}>
        
        <Grid item xs={6} >
          <div class="ima">
            <img src={ima}/>
          </div>
        </Grid>
        <Grid item xs={6} style={{marginTop:"2cm"}}>
        <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header ><h2 style={{color:"green"}}>CONNECT</h2></Accordion.Header>
    <Accordion.Body><p style={{color:"green"}}>
    We believe the most effective connections are emotional. People know it when they feel it.

Our interactive web design agency in Los Angeles helps you connect with your audience in exciting and engaging ways. We focus on your success by defining your needs and achieving your goals.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header><h2 style={{color:"green"}}>CREATE</h2></Accordion.Header>
    <Accordion.Body>
   <p style={{color:"green"}}> Our professional Los Angeles web design team collaborates to develop the best strategies and inspired solutions for your brand.

We leverage intelligence and technology as we create great experiences. Just like every brand is unique, every digital initiative needs to be a customized approach.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header><h2 style={{color:"green"}}>EVOLVE</h2></Accordion.Header>
    <Accordion.Body>
   <p style={{color:"green"}}> What matters to us is not just what we’ve done in the past, but what we’ll be doing next. We believe in looking towards the future with our clients.

Our creative digital agency in Los Angeles creates engaging and intuitive website designs to establish your online presence. We’ve found brands are like people; they need to breathe, grow and evolve.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </Grid>
    </Grid>
  )
}
export default Acc;