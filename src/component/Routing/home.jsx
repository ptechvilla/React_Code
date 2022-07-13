import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Menu from './menu';
import About from './about';
import Contact_us from './contact_us';
import User from './user'
import Services from './services'
import '../Routing/navbar.css'



const Home = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={Menu} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact_us" component={Contact_us} />
                <Route exact path="/user/:id" component={User} />
                <Route exact path="/services" component={Services} />
            </Switch>
        </>
    )
}
export default Home;
