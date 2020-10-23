import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import {Link} from "react-router-dom"


function App() {
  return (
    
    <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <Link to="aboutUs"> About Us</Link>
                <Link to="cashOffer"> Cash Offer</Link>
                <Link to="sellerFinance"> Seller Finance</Link>
                <Link to="investorListings"> investor Listings</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
            <Link to="aboutUs"> About Us</Link>
                <Link to="cashOffer"> Cash Offer</Link>
                <Link to="sellerFinance"> Seller Finance</Link>
                <Link to="investorListings"> investor Listings</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
