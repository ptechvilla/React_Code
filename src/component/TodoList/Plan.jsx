import React from 'react'
import DeleteForeverOutlinedIcon   from '@material-ui/icons/DeleteForeverOutlined';



const Plan = (props) => {
    return (
        <>
            <div className="container" style={{display: "flex"}}>
                <li style={{ color: "aqua" }}>{props.value}</li>
                <DeleteForeverOutlinedIcon   style={{marginLeft:"150px", display: "flex-end", position:"fixed",color:"red"}}>X</DeleteForeverOutlinedIcon  >
            </div>

        </>
    )
}
export default Plan;
