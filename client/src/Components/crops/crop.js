import React from 'react'
import { Grid } from '@mui/material'
import "./crop.css"
export default function Crop() {
  return (
  <Grid container>
    <Grid item lg={4} sm={4} md={4}>
<h3 className='knowproduct'>KNOW YOUR PRODUCTS</h3>
<h6 className='heading'>Organic/Natural/Safe-to-eat food at your <br/>door step</h6>
<ul className='list'>
    <li>
        <img className='icon' src="https://communityfarm.in/wp-content/themes/shopkeeper-child/images/home/features/harvest.svg" />
        <h4>Safe-to-Eat</h4>
        <p className='points'>Products coming from farms following GAP (Good Agricultural Practises).</p>
    </li>
    <li>
        <img className='icon' src="https://communityfarm.in/wp-content/themes/shopkeeper-child/images/home/features/organic.svg" />
        <h4>Organic Certified</h4>
        <p className='points'>Produce sourced from farms that have valid organic certification as per Jaivik Bharat Standards</p>
    </li>
    <li>
        <img className='icon' src="https://communityfarm.in/wp-content/themes/shopkeeper-child/images/home/features/naturallyGrown.svg" />
        <h4>Naturally Grown (ZBNF)</h4>
<p className='points'>Products coming from farms follow Zero Budget Natural Farming methods.</p>
        
    </li>
</ul>
    </Grid>
    <Grid item lg={8} sm={8} md={8}>
        <img  className='bigimage' src="https://images.unsplash.com/photo-1529313780224-1a12b68bed16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhcm18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" />
    </Grid>
    </Grid>
   
    
  )
}