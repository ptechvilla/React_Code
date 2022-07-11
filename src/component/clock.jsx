import React from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function Time() {
    let time = new Date().toLocaleTimeString();

    const [ctime, settime] = useState(time);

    let updatetime = () => {
        let time = new Date().toLocaleTimeString();
        settime(time);
    }

    setInterval(updatetime, 1000);

    return (
        <div>
            <h2>React routing</h2>
            <Link to="/hooks">For hooks</Link><br/>
             <a href='/hooks'> For hooks click here</a> {/* If we use anchor tag instead of Link tag it refresh the page whenever Link tag does not refresh the page during the content loading */}
            <h1>Hello, world!</h1>
            <h2 style={{ color: "red" }}>It is {ctime}.</h2>
        </div>
    );
}
export default Time;