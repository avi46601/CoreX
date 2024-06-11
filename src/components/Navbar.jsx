import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png'
const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-between" sx={{ marginX: { lg: "40px", xs: "20px" }, marginY: "20px" }}>
      <Link to="/" >
        <img src={Logo} alt="logo" style={{ width: '100px', height: '40px' }} />
      </Link>
      <Stack
        direction="row"
        fontFamily="Alegreya"
        fontSize="22px"
        alignItems="center"
        justifyContent="center"
        sx={{ gap: { lg: '40px', xs: '10px' } }}
      >
        <Link to="/" className='linkStyle'>Home</Link>
        <a href="#exercises" className='linkStyle'>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar