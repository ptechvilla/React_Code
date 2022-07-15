import React from 'react';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import Plan from './Plan';
import './table.css';

class Todo extends React.Component {
    state = {
        items: [],
        text: ""
    }

    handelechange = (e) => {
        this.setState({ text: e.target.value })
    }

    handleAdd = e => {
        if (this.state.text !== "") {
            const items = [...this.state.items, this.state.text];
            this.setState({ items: items, text: "" })
        }
    }

    render() {
        return (
            <>
                <Container maxWidth="100vw" style={{ backgroundColor: 'darkslategray', height: "100vh", position: "fixed" }}>
                    <Table className="tbl">
                        <h2 style={{color: "violet", marginLeft: "42px"}}>Today's Plan</h2>
                        <input type="text" placeholder='write plan here' value={this.state.text} onChange={this.handelechange} /> &nbsp; &nbsp;
                        <button onClick={this.handleAdd}>Add</button>
                        {
                            this.state.items.map((value, i) => {
                                return <Plan key={i} id={i} value={value} />
                                
                            })
                        }
                       

                    </Table>
                </Container>
            </>
        );
    }
}
export default Todo;
