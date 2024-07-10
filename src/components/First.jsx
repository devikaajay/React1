import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Devika G</h1>
      <input placeholder = 'Username'/>
      <br /><br />
      <input type='password' placeholder='password'/>
      <br /><br />
      <button>Login</button>
      <br /><br /><br /><br />
      <Typography variant='h1'>Login Page</Typography>
      <br /><br />
      <TextField variant='outlined' label='Username'/> 
      <br /><br />
      <TextField variant='filled' label='Username'/>
      <br /><br />
      <TextField variant='standard' label='Username'/>
      <br />
      <Button variant="text">LOGIN</Button>
      <Button variant="contained">LOGIN</Button>
      <Button variant="outlined">LOGIN</Button>

    </div>
  )
}

export default First
