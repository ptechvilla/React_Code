import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import axios from 'axios';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const row ={
    display: "inline",
    width: "100px"
}

// comment


const News = () => {
    const [news, setNews] = useState([]);


    const fetchnews = () => {
        axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=9f15837d0bf94e028496e6c920ecbe82").then((res) => {
            // console.log(res);
            setNews(res.data.articles);
        })
    }
    return (
        <>
            <Button color="primary" variant="contained" onClick={fetchnews}>fetch News</Button><br /><br/>
            <div className="container">
                <div className="row" style={row}>
                    {
                        news.map((value) => {
                            return (
                                <div className="col" >
                                    <Card sx={{ maxWidth: 500 }} style={{ width: "30%" }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={value.urlToImage}
                                            alt="..."
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {value.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {value.description}

                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                          <a href={value.url}> <Button size="small" style={{ color: "red" }}>Read more...</Button></a> 
                                        </CardActions>
                                    </Card>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default News;






