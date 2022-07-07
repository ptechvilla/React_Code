import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Pokeman = () => {
    const [num, setNum] = useState();
    const [name,setName] = useState();
    const [moves,setMoves] = useState();

    useEffect(() => {
        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/1${num}`)
            // console.log(res.data.name);
            // console.log(res.data.moves.length);
            setName(res.data.name);
            setMoves(res.data.moves.length);
        }
        getData();
    });


    return (
        <>
        <h1 style={{color:"green",textAlign:"center"}}>You are using Pokeman Component</h1>
            <h1>you choose <span style={{color:"red"}}>{num}</span>  value </h1>
            <h2>My name is <span style={{color:"red"}}>{name}</span> </h2>
            <h2>I have <span style={{color:"red"}}>{moves}</span> moves</h2>
            <select value={num} onChange={(event) => (
                setNum(event.target.value)
            )} >
                <option value="1">1</option>
                <option value="25">25</option>
                <option value="3"> 3 </option>
                <option value="4"> 4 </option>
                <option value="6"> 6 </option>
            </select>

        </>
    );
}

export default Pokeman;