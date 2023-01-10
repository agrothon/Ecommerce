import React, { useState, useContext } from 'react';

import { Box, Typography, Badge, Button, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

import { Link } from 'react-router-dom';
import { LoginContext } from '../../context/ContextProvider';
import { useSelector } from 'react-redux';

import Profile from './Profile';
import LoginDialog from '../Login/LoginDialog';

const Container = styled(Link)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block',
        boxShadow: 'solid',
        variant:"outlined",
        label:"Outlined",
    }
}));

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '8   3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#000000',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#000000',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10,
            boxShadow: 'solid',
        
           
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block',
       
    }
}));

const LoginButton = styled(Button)(({ theme }) => ({
    color: '#000000',
    background: '#FFFFFF',
    textTransform: 'none',
    fontWeight: 600,
    borderRadius: 8,
    padding: '5px 40px',
    height: 32,
    boxShadow: ' solid',
   
    [theme.breakpoints.down('sm')]: {
        background: '#000000',
        color: '#FFFFFF'
    }
}));


const CustomButtons = () => {
    
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant="outlined" style={{ marginLeft: 10 }} onClick={() => openDialog()}>Login</LoginButton>
                
            }
            <Typography style={{ marginTop: 3, width: 135, fontWeight:100 ,fontSize:15  }}><b>Become a Seller</b></Typography>
            {/* <Typography style={{ marginTop: 3 }}>More</Typography> */}
            
            <Container to='/cart'>
                <Badge badgeContent={cartItems?.length} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
        </Wrapper>
    )
}

export default CustomButtons;   