import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box margin='40px 40px 10px 40px' bgcolor="#fafafa" display="flex" flexDirection='row' >
    <img src={Logo} alt="logo" style={{ width: '100px', height: '40px'}} />
    <Typography variant="h6" width='100%' textAlign='end' sx={{fontSize: { lg: '15px', xs: '10px' } ,pt:'15px'}}>Made by Avi 👨‍💻</Typography>
  </Box>
);

export default Footer;