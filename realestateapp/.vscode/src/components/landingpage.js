import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import Form from './form'


class LandingPage extends Component {
    render(){
        return(
                <div style={{width: '100%', margin: 'auto'}}>

                <Grid className= "landing-grid">
                    <Cell col={12}></Cell>
              
                    <div className='banner-text'>
                    
                        <h1>Get Multiple Offers From The Comfort Of Home </h1> 
                        <hr/>
                        <p> Offering Assistance to |Preforclosures| Tired LandLords| Relief From Mortgages| Investors|</p>
                    <Form/>
                    </div>                 
                </Grid> 

               

                <div className= 'body'>
                
                <h1>We Give Fair Cash Offers To Properties In All NJ Counties!!!</h1>

                <div className='advertisment'>
                <iframe title="ad" width="860" height="560" src="https://www.youtube-nocookie.com/embed/CU1oyQvcqQg?autoplay=1&controls=0" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
               
                <p><strong>
                     Selling a house can be stressful, time-consuming, and expensive.  
                 We can eliminate that stress and give you the peace of mind that comes 
                 with knowing your house hassles are completely done – without having to 
                 fix it up, show it, wait for buyer financing, or evict the tenants.
                 And, it all happens SO FAST.
                </strong> </p>

                <h5><strong>
                     We work with people every week who need to sell their house fast.
                     Also with people that want out of their current mortgage for your
                     own personal reason.
                </strong></h5>
                 

                <p><strong>
                    From people in foreclosure, going through a divorce, relocating and 
                    can’t sell their house, those who own a vacant house they don’t want 
                    to deal with any more… to landlords tired of dealing with tenants,
                    people who inherited a house they don’t want, good folks who lost 
                    their job and just can’t afford the payment any more and can’t afford 
                    to pay a real estate agent their fees to sell it, to people who owe 
                    more on their house than it’s worth and listing with an agent just 
                    isn’t an option.
                </strong> </p>

                <p><strong>What all of these people we help have in common is… </strong> </p>

               <ul><strong>
                   <div className= "redfont">
                   <p><strong>They deserve to receive fair treatment.</strong> </p> 
                   <p> <strong>They need a quick solution that puts cash in their pocket right away.</strong> </p>
                   <p><strong>They shouldn’t have to pay all of the extra cash for real estate agent fees, closing fees, etc.</strong>  </p>
                   <p><strong>They just want to end the headache this house is giving them.</strong> </p>
                   </div>
               </strong> </ul> 

               <p><strong>… and we can help them achieve all of these.</strong> </p>
               <p> <strong>If you want to sell your house, just fill out the quick form below. <h2>Or give us a call right now at  (732) 838-5614.</h2></strong></p>
            

                <h2><strong>Just Leave The Key To Us</strong></h2>


              
                <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/9339760.js"></script>


                </div>

                <Form/>
               
            
            
            
            
            </div>
        )
    }
}

export default LandingPage