import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../Routing/navbar.css'



const User = ({match}) => {
    return (
        <>
            <div class="nav">
                <ul>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact_us">contact_us</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/user">user</NavLink>
                    </li>
                </ul>
            </div>
            <h1>This is {match.params.id} component</h1>

        </>
    )
}
export default User;

