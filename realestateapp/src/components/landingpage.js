import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'


class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className= "landing-grid">
                <Cell col={12}></Cell>
                <img
                    src="data:image/jpeg;base64,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"
                    alt = "avatar"
                    className="avatar-img"
                />
                <div className='banner-text'>
                    <h1>ThisForBliss Real Estate</h1>
                    <hr/>
                    <p> Offering Assistance to |Preforclosures| Tired LandLords| Relief From Mortgages| Investors|</p>
                </div>     
                </Grid> 

                <div><h1>We Give Fair Cash Offers To Properties In All NJ Counties!!!  </h1></div>
               
                <p>Selling a house can be stressful, time-consuming, and expensive.  
                 We can eliminate that stress and give you the peace of mind that comes 
                 with knowing your house hassles are completely done – without having to 
                 fix it up, show it, wait for buyer financing, or evict the tenants.
                 And, it all happens SO FAST. </p>

                 <h5>We work with people every week who need to sell their house fast.
                     Also with people that want out of their current mortgage for your
                     own personal reason.
                 </h5>

                 <p>From people in foreclosure, going through a divorce, relocating and 
                     can’t sell their house, those who own a vacant house they don’t want 
                     to deal with any more… to landlords tired of dealing with tenants,
                      people who inherited a house they don’t want, good folks who lost 
                      their job and just can’t afford the payment any more and can’t afford 
                      to pay a real estate agent their fees to sell it, to people who owe 
                      more on their house than it’s worth and listing with an agent just 
                      isn’t an option. </p>

                <p>What all of these people we help have in common is… </p>
               <ul> 
                   <li>They deserve to receive fair treatment. </li> 
                   <li> They need a quick solution that puts cash in their pocket right away. </li>
                   <li> They shouldn’t have to pay all of the extra cash for real estate agent fees, closing fees, etc. </li>
                   <li>They just want to end the headache this house is giving them. </li>
               </ul> 

               <p>… and we can help them achieve all of these. </p>
               <p> If you want to sell your house, just fill out the quick form below. <strong>Or give us a call right now at  (732) 641-6352.</strong></p>
            

                <h2>Sell Your House Now</h2>

                <h4> Put Form Here</h4>

                <h4>So Who are we? </h4>
                <p> ThisForBliss Real Estate is the Monmouth County area’s most respected house buying service. We are a highly experienced home buying team that is focused on helping homeowners like you to sell your house fast, without any hassle, games, or fees, and we’re committed to delivering this service with transparency and integrity throughout the entire experience.

We buy houses all over the country, including Monmouth County and surrounding areas. We know the area, which means our home buying team can help you sell your house fast no matter where it is or what condition it’s in (and even if there are tenants).

Again, we’re not agents who are trying to sell your house to others. We are professional house buyers, which means we have our own cash and are ready to buy. We can even make you an offer on the spot. Once we make you an offer you can choose whether or not you want to take that offer (and you can even shop it around if you want, talk it over with others, and think about it before deciding). We have a strict no-pressure policy, and our many previous clients love it and are proof that it works.</p>
            
            
            
            
            
            </div>
        )
    }
}

export default LandingPage