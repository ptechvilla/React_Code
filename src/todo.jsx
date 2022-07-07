import React from "react";

class ADDTODO extends React.Component {
     state={
        todotext:[]
     };

    submitHandler = event => {
        event.preventDefault();
    };


    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={this.state.todotext}/>
                    <button type="submit">Add todo</button>

                </form>
            </>
        );
    }
}

export default ADDTODO;