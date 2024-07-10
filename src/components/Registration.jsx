import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Registration = () => {
  return (
    <div>
      <Typography variant='h3'>Registration Form</Typography>
      <br /><br />
      <TextField variant='filled' label = 'Name'/>
      <br />
      <TextField variant='outlined' label = 'Age'/>
      <br />
      <TextField variant='filled' label = 'College'/>
      <br />
      <TextField variant='outlined' label = 'Department'/>
      <br />
      <TextField variant='filled' label = 'Email'/>
      <br />
      <TextField variant='outlined' label = 'Password'/>
      <br /><br />
      <Button variant="contained">Sign up</Button>
    </div>
  )
}

export default Registration
