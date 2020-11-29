import React from 'react'
import LandingPage from './landingpage'
import AboutUs from './aboutus'
import {Switch, Route} from 'react-router-dom'
import Listings from './listings'
import SellerFinance from './sellerfinance'
import CashOffer from './cashoffer'
import Forms from './form'
import howItWorks from './howItWorks'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route  path ="/aboutUs" component={AboutUs} />
        <Route  path ="/cashOffer" component={CashOffer} />
        <Route  path ="/sellerFinance" component={SellerFinance} />
        <Route  path ="/investorListings" component={Listings} />
        <Route  path = "/form" component ={Forms} />
        <Route  path = "/howItWorks" component ={howItWorks} />
    </Switch>
)

export default Main;