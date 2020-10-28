import React from 'react'
import LandingPage from './landingpage'
import AboutUs from './aboutus'
import {Switch, Route} from 'react-router-dom'
import Listings from './listings'
import SellerFinance from './sellerfinance'
import CashOffer from './cashoffer'

const Main = () => (
    <Switch>
        <Route exact path ="/" component={LandingPage} />
        <Route  path ="/aboutUs" component={AboutUs} />
        <Route  path ="/cashOffer" component={CashOffer} />
        <Route  path ="/sellerFinance" component={SellerFinance} />
        <Route  path ="/investorListings" component={Listings} />
        
    </Switch>
)

export default Main;