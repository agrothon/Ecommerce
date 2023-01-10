import React from 'react'
import { Grid } from '@mui/material'
import { Button } from '@mui/material';
import "./middle.css";
export default function Middle() {
  return (
    <>
   <Grid container className='main'>
    <Grid item lg={6} sm={6} md={6}>
<h2 className='heading'>THE BENEFITS OF OUR A2C ARE</h2>
<h1 className='lines'><b>Hygienically<br/>packed,<br />
safely delivered</b></h1>

<Button className='button' variant="contained" style={{backgroundColor: "orange", borderRadius: 15 , fontSize: "18px"}}>LEARN MORE</Button>
  

    </Grid>
    <Grid item lg={6} sm={6} md={6}>
        <img src='https://communityfarm.in/wp-content/themes/shopkeeper-child/images/home/benefits-main.svg' className='bigimage'  />
    </Grid>

   </Grid>
   <br />
   <br />
   <br />
   <Grid container  className='main'>
    <Grid item lg={4} sm={4} md={4}>
    <img className='favicon' src="https://cdn-icons-png.flaticon.com/128/3228/3228952.png" />
<h5>Directly from farm</h5>
<p className='para'>Our products are delivered straight to <br />us by the farmer themselves right after <br /> they are harvested</p>
    </Grid>
    <Grid item lg={4} sm={4} md={4}>
    <img className='favicon' src="https://cdn-icons-png.flaticon.com/128/2769/2769339.png" />
      <h5>Shipping on Wed & Sat</h5>
      <p className='para'>Two delivery days every week so you<br /> never run out of freshness and health”</p>
      </Grid>
      <Grid item lg={4} sm={4} md={4}>
      <img className='favicon' src="https://cdn-icons-png.flaticon.com/128/1019/1019709.png" />
      <h5>Secure payment</h5>
      <p className='para'>Select an online payment method of <br />your choice for a quick and easy<br /> checkout</p>
      </Grid>
   </Grid>
   </>

  )
}
