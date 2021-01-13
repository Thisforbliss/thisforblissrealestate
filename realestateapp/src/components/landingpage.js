import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import Form from './form'


class LandingPage extends Component {
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
            <Grid className= "landing-grid">
                <Cell col={12}></Cell>
                {/* <img
                    src= "https://bn1303files.storage.live.com/y4mYwWexxC9eA68bMlGkjOgeY2KZVjuaV_RgjMS17pCXkUssWy5NZkQ8soNLzNzB7K2Ps8FExfHIkcubvjSs6L79unLSGWQqzxdTLkos3M54N0xM01dexSSN8PCuXhzQ7VV0sCSjzF_I3s40AfB4V3inFRxL9sh0l2cYeqEj-2KWPc7CIua2IjUUM4Wujtz0Cc9bYhtZF5v6Rnd0qBHAuZLUg/ADS_0020.jpg?psid=1&width=1076&height=717 "
                    alt = "avatar"
                    className="avatar-img"
                /> */}
                <div  className='banner-text'>
                    
                    <h1  >Get Multiple Offers From The Comfort Of Home </h1> 
                    <hr/>
                    <p> Offering Assistance to |Preforclosures| Tired LandLords| Relief From Mortgages| Investors|</p>
                    <Form/>
 
                

                </div> 

                
                </Grid> 

               

                <div className= 'body'>
                
                <h1 >We Give Fair Cash Offers To Properties In All NJ Counties!!!  </h1>

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
                   
                   <p><strong>They deserve to receive fair treatment.</strong> </p> 
                   <p> <strong>They need a quick solution that puts cash in their pocket right away.</strong> </p>
                   <p><strong>They shouldn’t have to pay all of the extra cash for real estate agent fees, closing fees, etc.</strong>  </p>
                   <p><strong>They just want to end the headache this house is giving them.</strong> </p>
               </strong> </ul> 

               <p><strong>… and we can help them achieve all of these.</strong> </p>
               <p> <strong>If you want to sell your house, just fill out the quick form below. <h2>Or give us a call right now at  (732) 641-6352.</h2></strong></p>
            

                <h2><strong>Just Leave The Key To Us</strong></h2>


             

                </div>

                <Form/>
               
            
            
            
            
            </div>
        )
    }
}

export default LandingPage