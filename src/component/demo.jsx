import React from "react";




export default function Demo() {
    return (
        <>
            <h1>This is the use of fragment example</h1>
            <h1><Demo1 name="prashant" position="interns" /></h1>
            <Conditional/>
        </>
    );
}

function Demo1(p) {


    return (
        <>
            <h6>hello {p.name} your position is:{p.position}</h6>

            <First />

        </>
    );
}

class First extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "rahul",
            age: 25
        }
    }
    OnStateChange() {
        this.setState({ name: "Hari ", age: this.state.age + 1 })
    }
    render() {
        return (
            <>
                {this.state.name} {this.state.age} <br />
                <button onClick={() => this.OnStateChange()}>change age</button>
            </>
        );
    }

}

// conditional rendering

class Conditional extends React.Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return (
                <>
                Hello Guest
                </>
            );
        } else {
            return (
                <>
                Hello User
                </>
            );
        }

    }
}



