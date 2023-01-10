import React from 'react'
import "./footer.css"
import { Grid } from '@mui/material'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (

<>
    <Grid container className='main'>
        <Grid item lg={4} sm={4} md={4} >
        <h3 className='bold'>Company</h3>
       <ul className='unordered'>
        <li className='items'>About Us</li>
        <li className='items'>Buy/ Sell</li>
        <li className='items'>Careers</li>
        <li className='items'>People</li>
       </ul>
        </Grid>
        <Grid item lg={4} sm={4} md={4}>
            <h3>Resources</h3>
            <ul className='unordered'>
        <li className='items'>Blog</li>
        <li className='items'>FAQ</li>
        <li className='items'>Media</li>
        <li className='items'>Reach Us</li>
       </ul>
        </Grid>
        <Grid item lg={4} sm={4} md={4}>
<h3>Connect with us</h3>
<Grid container className='connect'>
    <Grid item lg={1} sm={1} md={1} className='icon'>
        <FacebookOutlinedIcon  />
    </Grid>
    <Grid item lg={1}  sm={1} md={1} className='icon'>
        <InstagramIcon   />
    </Grid>
    <Grid item lg={1}  sm={1} md={1} className='icon'>
        <TwitterIcon   />
    </Grid>
    <Grid item lg={1}  sm={1} md={1} className='icon'>
        <LinkedInIcon  />
    </Grid>
</Grid>
        </Grid>
    </Grid>
    <hr />
    <Grid container>
        <Grid col lg={2}>
            <p className='last'>Customer Support</p>
        </Grid>
        <Grid col lg={2}>
            <p className='last'>Terms and Conditions</p>
        </Grid>
        <Grid col lg={2}>
            <p className='last'>Refund Policy</p>
        </Grid>
        <Grid col lg={2}>
            <p className='last'>Privacy Policy</p>
        </Grid>
        <Grid col lg={2}>
            <p className='last'>Pricing Policy</p>
        </Grid>
        <Grid col lg={2}>
            <p className='last'>Vendor Registration</p>
        </Grid>
    </Grid>
</>
  )

}