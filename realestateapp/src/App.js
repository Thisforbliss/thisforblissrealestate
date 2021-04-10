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
                <Link to= "howItWorks">How it Works</Link>
                <div> <p><strong>CALL US (732) 641-6352</strong> </p></div>
            </Navigation>
        </Header>
        <Drawer title="Drop Down Menu">
            <Navigation>
                <Link to="/"> Home</Link>
                <Link to="aboutUs"> About Us</Link>
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

                <h6>Contact Us- (732) 641-6352</h6>
                <h6>Email- Thisforbliss@tfbhomeoffers.com </h6>  
            </FooterLinkList>
        </FooterDropDownSection>
      
    </FooterSection>
</Footer>

    </Layout>


   


</div>
  );
}

export default App;
