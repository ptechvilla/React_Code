import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [one, setone] = useState(0);
    const [two, settwo] = useState(0);

    const Addone = () => {
        setone(one + 1);
    }

    const Addtwo = () => {
        settwo(two + 2);
    }

    const isEven = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++;
        return one % 2 === 0
    }, [one])

    return (<>
        <h1>this is useMemo component</h1>
        <button onClick={Addone}>CounterOne-{one}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
        <button onClick={Addtwo}>CounterTwo-{two}</button>

    </>

    )
}
export default UseMemo