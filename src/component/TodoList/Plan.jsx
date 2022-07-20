import React from 'react'
import DeleteForeverOutlinedIcon   from '@material-ui/icons/DeleteForeverOutlined';
//import EditIcon from '@material-ui/icons/Edit';




const Plan = (props) => {
    return (
        <>
            <div className="container" style={{display: "flex"}}>
              <li style={{ color: "aqua"}}>{props.value}</li> 
              {/* <EditIcon style={{marginLeft:"200px",color:"red",display:"flex-end",position:"fixed"}}></EditIcon> */}
                <DeleteForeverOutlinedIcon  onClick={()=>props.senddata(props.id)} style={{marginLeft:"230px", display: "flex-end", position:"fixed",color:"red"}}>X</DeleteForeverOutlinedIcon  >
            </div>

        </>
    )
}
export default Plan;
