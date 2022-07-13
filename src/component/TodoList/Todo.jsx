import React from 'react'
import Container from '@material-ui/core/Container';

const pra = {
    color: 'blue'
}

class Todo extends React.Component {

    render() {
        return (
            <>
                <Container maxWidth="sm" style={pra}>
                    <h2>Today's Plan</h2>
                    <input type="text" />

                    <button>Add</button>

                </Container>
            </>
        );
    }
}
export default Todo;
