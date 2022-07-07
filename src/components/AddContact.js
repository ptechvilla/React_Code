import React from 'react'

class AddContact extends React.Component{


    render(){
        return(
            <div>
            <h1>Add Contact</h1>
            <form>
                <div>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Enter Name" style={{color: "red"}} />
                </div>
                <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Enter Email" />
                </div>
            </form>
            </div>
        );
    }
}

export default AddContact;