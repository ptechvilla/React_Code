import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import HomeIcon from '@material-ui/icons/Home';

function Icons(){
    return(
        <>
         <MenuIcon />
              <Button color="primary" variant="contained">click</Button>
            
                <DeleteIcon />
                <HomeIcon />
        </>
    );
}

export default Icons;