import React from 'react'
import { Grid, Card, Typography, Tabs, Tab, Box } from '@mui/material'
import pic1 from '../../../images/pic1.png'
import { useState } from 'react'
import UserLogin from './UserLogin'
import Registration from './Registration'
//import UserLogin from './UserLogin';

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role='tabpanel' hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>

    );
}

const LoginReg = () => {
    const [value,setValue]=useState(0);
    const Handlechange=( event, newvalue)=>{
        setValue(newvalue)
    }
    return (<>
        <Grid container sx={{ height: '90vh' }}>
            <Grid item lg={7} sm={5} sx={{
                backgroundImage: `url(${pic1})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            </Grid>

            <Grid item lg={5} sm={7} sx={{}}>
                <Card sx={{ height: "100%", weight: "100%" }}>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={Handlechange}>
                                <Tab label="Login" sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                                <Tab label="Registration" sx={{ textTransform: 'none', fontWeight: 'bold' }}></Tab>
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} >
                            <UserLogin />
                        </TabPanel>
                        <TabPanel value={value} index={1} >
                             <Registration />
                             </TabPanel>
                    </Box>
                </Card>
            </Grid>

        </Grid>

    </>
    )
}

export default LoginReg