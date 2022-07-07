import React from "react";

class Child extends React.Component{


    render(){
        return(
            <>
            <button onClick={()=>this.props.greet('child ji')}>Click here</button>
            </>
        );
    }
} 

export default Child;