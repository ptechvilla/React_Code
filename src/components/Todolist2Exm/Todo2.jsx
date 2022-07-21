import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Plan from './Plan'

import { CardActionArea, Stack } from '@mui/material';

class Todo2 extends React.Component {
    state = {
        items: [],
        text: ''
    }
    handleinput = (e) => {
        this.setState({ text: e.target.value })
        // console.log(e.target.value);
    }
    handleClick = () => {
        if (this.state.text != "") {
            const items = [...this.state.items, this.state.text]
            this.setState({ items: items, text: '' })
        }
    }
    ondeleteItem = (id) => {
        const item=[...this.state.items]
        item.splice(id,1);
        this.setState({items:item})
    }

    render() {
        return (
            <>
                <Card sx={{ ml: '450px', mt: '100px', mr: '450px', mb: '100px', bgcolor: 'acqua', height: "350px", bgcolor: '#e1bee7' }}>
                    <Typography>
                        <h2 style={{ textAlign: "center" }}>Todo List</h2>
                    </Typography>
                    <CardActionArea>
                        <Stack spacing={2} direction='row'>
                            <input type="text" style={{ marginLeft: '110px', width: "250px" }} value={this.state.text} onChange={this.handleinput} />
                            <Button variant='outlined' size="small" onClick={this.handleClick}>ADD</Button>
                        </Stack>
                        {
                            this.state.items.map((value, i) => {
                                return <Plan key={i} id={i} value={value} senddata={this.ondeleteItem} />;
                            })
                        }
                    </CardActionArea>

                </Card>

            </>
        )
    }
}

export default Todo2