import React from 'react'
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Plan = (props) => {
  return (
    <>
 <div style={{ display: "flex" }}>
    <li style={{marginLeft:'80px'}}>{props.value}</li>
    <DeleteForeverOutlinedIcon onClick={()=>props.senddata(props.id)} style={{marginLeft:'350px',position:'fixed',display:'flex-end',color:'red'}}/>
 </div>
    </>
  )
}

export default Plan
