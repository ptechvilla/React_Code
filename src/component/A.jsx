import React from 'react'
// import B from './B'
 import D from './D'



const FirstName = React.createContext();


function A(props) {
    return (
        <>
            <FirstName.Provider value={"Prashant"}>
                <D />
            </FirstName.Provider>
        </>
    )
}
export default A;
export {FirstName};