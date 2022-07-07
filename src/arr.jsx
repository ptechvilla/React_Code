import React from "react";
import ADDTODO from './todo';

let Data= () =>{
const Arr = [
    {
        name: 'prashant',
        subject: 'developer'
    },
    {
        name: 'lalit',
        subject: 'coder developer'
    },
    {
        name: 'rajeev',
        subject: ' junior developer'
    }
];

return(
    <>
      <h2>{Arr.map((todo)=>{
        return <div>
            {todo.name} {todo.subject}
            </div>
      })}</h2>
      <ADDTODO/>
    </>
);
};

export default Data;