import React from 'react'
import FirstName from './A';

function D(props) {
    return (
        <>
            {/* <h1>hghggk</h1> */}
            <FirstName.Consumer>
                {(fname) => {
                    return (<h1>{fname}</h1>)
                }
                }
            </FirstName.Consumer>
        </>
    )
}
export default D;