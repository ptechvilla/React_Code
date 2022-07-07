import React from "react";
//import Card from '@material-ui/core/Card';

class Forms extends React.Component {
    constructor(props) {
        super()
        this.state = {
            username: '',
            usernameError: false,
            course: '',
            coursenameError: false
        }
    }
    usernamechange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    coursechange = (event) => {
        this.setState({
            course: event.target.value
        })
    }

    // validation
    handleSubmit = (event) => {
        if (this.validate()) {
            alert(`${this.state.username} likes ${this.state.course}`)
        }
        event.preventDefault();
    }
    validate = () => {
        let error = true;
        if (this.state.username === '') 
        {
            error = false;
            this.setState({
                usernameError: 'user name is empty'
            })
        }

    }

    render() {
        return (
            
            <div>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>UserName: </label>
                        <input type="text" value={this.state.username} onChange={this.usernamechange} />
                        {this.state.usernameError && <div className="error">{this.state.usernameError}</div> }
                    </div>

                    <div>
                        <label>Course: </label>
                        <select value={this.state.course} onChange={this.coursechange}>
                            <option value="angular">Angular</option>
                            <option value="react">React</option>
                            <option value="html">HTML</option>

                        </select>
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>

        );
    }
}

export default Forms;