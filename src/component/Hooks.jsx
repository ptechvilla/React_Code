import React, { useState } from 'react';
import { Button } from '@material-ui/core';


function Hooks() {
    const[count,setCount]=useState(0);

    function increment(){
        setCount(prevCount=>prevCount+1);
        
    }
    function decrement(){
        setCount(prevCount=>prevCount-1);
    }

    return (
        <>
            <Button color="primary" variant="contained" onClick={()=>increment()}>ADD</Button><h1>{count}</h1><Button color="primary" variant="contained" onClick={()=>decrement()}>SUB</Button>
        </>
    );

}
export default Hooks;