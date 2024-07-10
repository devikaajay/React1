import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Home = () => {
  var [name, setName] = useState()
  const changeName = ()=>{
    setName("Home");
  };
  const changeGallery = ()=>{
    setName("Gallery");
  };
  const changeContact = ()=>{
    setName("Contact");
  };
  return (
    <div style={{textAlign: 'center', marginTop: '5%'}}>
      <Typography variant='h1'>Welcome {name}</Typography>
      <br /><br />
      <Button variant='contained' onClick ={changeName}>Home</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick ={changeGallery}>Gallery</Button>&nbsp;&nbsp;
      <Button variant='contained' onClick ={changeContact}>Contact</Button>
    </div>
  )
}

export default Home
