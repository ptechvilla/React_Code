import React from 'react'
// import B from './B'
import B from './B'



const FirstName = React.createContext();
const LastName = React.createContext();
const Age = React.createContext();

function A() {
    return (
        <>
            <FirstName.Provider value="Prashant">
                <LastName.Provider value="Kumar">
                    <Age.Provider value="24">
                        <B />
                    </Age.Provider>
                </LastName.Provider>
            </FirstName.Provider>

        </>
    )
}
export default A;
export { FirstName, LastName,Age };