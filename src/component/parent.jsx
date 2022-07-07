import React from "react";
import Child from "./child";

class Parent extends React.Component{

    greet(a,b){
        alert(`hello ji ${a} ${b}`);
    }


    render(){
        return(
            <>
             <Child greet={this.greet}/>
            </>
        );
    }
}

export default Parent;