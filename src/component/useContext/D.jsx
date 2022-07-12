import React from 'react'
import { useContext } from 'react';
import { FirstName, LastName, Age } from './A';

function D() {
    const firstname=useContext(FirstName);
    const lastname=useContext(LastName);
    const age=useContext(Age);
    return (
        <>

            {/* <FirstName.Consumer>
                {(fname) => {
                    return (
                        <LastName.Consumer>
                            {(lname) => {
                                return (
                                    <Age.Consumer>
                                        {(age) => {
                                            return (<h2>{fname} {lname} {age}</h2>)
                                        }

                                        }
                                    </Age.Consumer>
                                )
                            }
                            }
                        </LastName.Consumer>

                    )
                }
                }
            </FirstName.Consumer> */}

                <h1>{firstname} {lastname} {age}</h1>

        </>
    )
}
export default D;