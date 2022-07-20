
import React from 'react';

class To extends React.Component{
          state={
            items:[],
            text:""
         }

    inputEvent = (e) =>{
        //console.log(event.target.value);
     this.setState({text:e.target.value})
    
    }
    handleAdd =(e)=>{
        const items=[...this.state.items, this.state.text]
        this.setState({items:items,text:""})
    }

    render(){
        return (
            <>
                <div>
                    
                   
                    <input type="text" placeholder="Enter your name" onChange={this.inputEvent} />
                    <button onClick={this.handleAdd} >Click Me</button>
                    {
                        this.state.items.map((value)=>{
                         return  {value} ;
                        })
                    }
                </div>
            </>
        )
    }
    }
 
export default To;




