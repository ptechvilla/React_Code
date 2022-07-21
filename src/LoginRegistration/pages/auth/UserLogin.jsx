import React from 'react'
import { TextField, Button, Box,Alert } from '@mui/material'

const UserLogin = () => {
  return ( <>
     <Box component='form' sx={{mt:1}} id='login-form'>
      <TextField margin='normal' required fullWidth id='email' name='email' label='email here' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='password here' type="password" />
      <Box textAlign='center'>
      <Button sx={{mt:3, mb:2, px:5}} variant="contained">Login</Button>
      </Box>
     </Box>
    </>
  )
}

export default UserLogin