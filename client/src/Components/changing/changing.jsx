import React from 'react'
import Carousel from "react-material-ui-carousel"
import { Grid } from '@mui/material';
import "./changing.css";


export default function Changing() {
  return (
    <Carousel>
          <div className='main-case'>
          <Grid container>
            <Grid item lg={6} sm={6} md={6}>
<img  className="image" src="https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFybWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"/>
            </Grid>
            <Grid item lg={6} sm={6} md={6}>
              <h3 className='heading'>Benefits for farmers</h3>
              <ul className='list'>
             <li className='items'>20% more revenue</li>
             <li className='items'>One-Stop Sale</li>
             <li className='items'>Payment in 24 hours</li>
             <li className='items'>Transparent Weighing</li>

              </ul>
              </Grid>
          </Grid>
                </div>
                <div className='main-case'>
                <Grid container>
            <Grid item lg={6} sm={6} md={6}>
<img className="image" src="https://images.unsplash.com/photo-1506617564039-2f3b650b7010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGdyb2NlcnklMjBzdG9yZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
            </Grid>
            <Grid item lg={6} sm={6} md={6}>
              <h3 className='heading'>Convenience for Retailers</h3>
              <ul className='list'>
             <li className='items'>Competitive Farming</li>
             <li className='items'>Doorstep delivery</li>
             <li className='items'>High Quality graded produce</li>
             <li className='items'>Convenient and time saving</li>

              </ul>
              </Grid>
          </Grid>
                </div>
                <div className='main-case'>
                <Grid container>
            <Grid item lg={6} sm={6} md={6}>
<img className="image" src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29va2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"/>
            </Grid>
            <Grid item lg={6} sm={6} md={6}>
              <h3 className='heading'>Savings For customers</h3>
              <ul className='list'>
             <li className='items'>Hygienically handled produce</li>
             <li className='items'>100% traceable to farm-Improves food safety</li>
             <li className='items'>Better Quality </li>
             

              </ul>
              </Grid>
          </Grid>
                </div>
    </Carousel>
  )
}

