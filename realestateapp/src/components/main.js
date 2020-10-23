import React from 'react'
import LandingPage from './landingpage'
import AboutUs from './aboutus'
import {Switch, Route} from 'react-router-dom'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route exact path ="aboutus" component={AboutUs} />
    </Switch>
)

export default Main;