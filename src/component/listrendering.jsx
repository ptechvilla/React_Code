import React from "react";


function Lists() {

    const employees = ["arun", "mohit", "lalit", "shivam", "prashant", "nitish"];
    const emp = employees.map((val) =><ul>{val}</ul> )
    return (
        <>
        <h3 style={{color:"red"}}>// List rendering using map method</h3>
        <ul>
            {emp}
        </ul>
        </>
    );
}

export default Lists;