import React from 'react';

import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import {Link} from "react-router-dom"
import {Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl'


function App() {
  return (

    
    
    <div className="demo-big-content">
    <Layout>
        <Header className= "header-color" title="Menu" scroll>
            <Navigation>
                <Link to="/"> Home</Link>
                <Link to="aboutUs"> About Us</Link>
                {/* <Link to="cashOffer"> Cash Offer</Link> */}
                {/* <Link to="sellerFinance"> Mortgage Relief</Link> */}
                {/* <Link to="investorListings"> Listings</Link> */}
                {/* <Link to= "form"> Get An Offer!</Link> */}
                <Link to= "howItWorks">How it Works</Link>
                <div> <p><strong>CALL US (732) 641-6352</strong> </p></div>
            </Navigation>
        </Header>
        <Drawer title="TFB Drop Down Menu">
            <Navigation>
                <Link to="/"> Home</Link>
                <Link to="aboutUs"> About Us</Link>
                {/* <Link to="cashOffer"> Cash Offer</Link> */}
                {/* <Link to="sellerFinance"> Mortgage Relief</Link> */}
                {/* <Link to="investorListings"> Listings</Link> */}
                {/* <Link to= "form"> Get An Offer!</Link> */}
                <Link to= "howItWorks">How it Works</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/><br/><br></br>
        </Content>

        <Footer size="mega">
    <FooterSection type="middle">
        <FooterDropDownSection title="Contact Us">
            <FooterLinkList>
               
                <Link to="aboutUs">About</Link>
                {/* <Link to="#">Terms</Link>
                <Link to="#">Partners</Link>
                <Link to="#">Updates</Link> */}
                <h6>Contact Us- (732) 641-6352</h6>
                <h6>Email- Thisforbliss@tfbhomeoffers.com </h6>  
            </FooterLinkList>
        </FooterDropDownSection>
        {/* <FooterDropDownSection title="Details">
            <FooterLinkList>
                <Link to="#">Specs</Link>
                <Link to="#">Tools</Link>
                <Link to="#">Resources</Link>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="Technology">
            <FooterLinkList>
                <Link to="#">How it works</Link>
                <Link to="#">Patterns</Link>
                <Link to="#">Usage</Link>
                <Link to="#">Products</Link>
                <Link to="#">Contracts</Link>
            </FooterLinkList>
        </FooterDropDownSection>
        <FooterDropDownSection title="FAQ">
            <FooterLinkList>
                <Link to="#">Questions</Link>
                <Link to="#">Answers</Link>
                <Link to="#">Contact Us</Link>
            </FooterLinkList>
        </FooterDropDownSection>
    </FooterSection>
    <FooterSection type="bottom" logo="Title">
        <FooterLinkList>
            <Link to="#">Help</Link>
            <Link to="#">Privacy & Terms</Link>
        </FooterLinkList> */}
    </FooterSection>
</Footer>

    </Layout>


   


</div>
  );
}

export default App;
