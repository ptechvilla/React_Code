import React from 'react'
import { Grid,Card, Typography,Tabs,Tab,Box,TabPanel  } from '@mui/material'
import pic1 from '../../../images/pic1.png'
import UserLogin from './UserLogin'

const LoginReg = () => {
  return ( <>
  <Grid container sx={{height:'90vh'}}>
    <Grid item lg={7} sm={5} sx={{
        backgroundImage:`url(${pic1})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'
    }}>
    </Grid>

    <Grid item lg={5} sm={7} sx={{}}>
        <Card sx={{height:"100%", weight:"100%"}}>
            <Box>
                <Box sx={{borderBottom:1, }}>
                    <Tabs>
                        <Tab label="Login" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                        <Tab label="registration" sx={{textTransform:'none',fontWeight:'bold'}}></Tab>
                    </Tabs>
                </Box>
                
            </Box>
        </Card>
    </Grid>

  </Grid>

   </>
  )
}

export default LoginReg