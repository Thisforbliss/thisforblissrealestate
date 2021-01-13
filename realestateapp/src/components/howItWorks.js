import React, {Component} from 'react'
import {Grid, Cell, CardActions, Button, CardMenu, IconButton, Card, CardTitle, CardText} from 'react-mdl'
import Form from './form'
class howItWorks extends Component {
    render(){
        return(
            <div style={{width: '100%', height: '30%', margin: 'auto'}}>

         
            <Grid className= "how-grid">
                <Cell col={14}></Cell>
               <h1> Our 3 Step Process Is Fast And Fair.
               We Make It Easy To Sell Your House.
               </h1>   
               </Grid> 


                  <Grid className= "steps-grid">
                <Cell col={14}></Cell>
               <h1> How We Buy Houses</h1> 
               <p> Let’s face it, the traditional home selling process is awful. 
                   That’s why our mission is to make selling your home fair and simple.
                    Our 3 step process at ThisForBliss Real Estate allows you to sell your home on
                     your timeline, while still receiving a fair offer.</p>

            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle alt='cardtitle' style={{color: '#fff', height: '176px', background: 'url(https://i1.pickpik.com/photos/130/623/660/people-man-woman-couple-preview.jpg)'}}>Step 1</CardTitle>
                <CardText>
                <h5>We review the details of your home and set an appointment to meet with you or receive pictures of your property.</h5>
                </CardText>
    <           CardActions border>
                    <Button colored>Call or request an offer online, it’s fast and easy</Button>
                </CardActions>
            <CardMenu style={{color: '#fff'}}>
                 <IconButton name="share" />
             </CardMenu>
             </Card><br/><br/>

            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://snappygoat.com/b/38df357e853be0df5c688c8b286a0e7037f839ee) center / cover'}}>Step 2</CardTitle>
                <CardText>
                    <h5>We will walk the property with you. Once we view the property or pictures that you send us, we present you with a fair cash offer.</h5>
                </CardText>
                <CardActions border>
                    <Button colored>Meet with us at your home or send us pictures</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card><br/><br/>

            <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://snappygoat.com/b/57226eb8fbbb0af1fe72fd112b524ca8cbac735c) center / cover'}}>Step 3</CardTitle>
                <CardText>
                <h5>We can close on your schedule, whether you need a fast or slow closing. Sell your house on your terms.</h5>
                </CardText>
                <CardActions border>
                    <Button colored>Choose your closing date and move on your schedule</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
                </CardMenu>
                </Card><br></br>    
               </Grid>  

            <div className= 'body'>

            <div className='advertisment'>
                <iframe title="ad" width="860" height="560" src="https://www.youtube-nocookie.com/embed/CU1oyQvcqQg?autoplay=1&controls=0" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <h1> 1) Tell Us About Your Property</h1><br/>
                <p>
                    In order to make you the best possible offer, we speak with you about your 
                    property to gather a bit more information. We can speak with you over the 
                    phone, the form below, email, or even text message. You can call or text us
                     at (732) 641-6352 to get started.

                    We gather some basic information about your property before meeting you there.
                     This can include beds, baths, square footage, and any upgrades you’ve done 
                     recently. We try to be thorough, but also brief since we know your time is
                      valuable.

                    Once we know a bit more about your property, we do some research and take a 
                    look at the recent cash comparables in your area. From there we will be able
                     to come up with an idea of what we can pay for your home. This is just an
                      estimate that we have prior to meeting you at your property.
                </p><br/><br/>

                < img src="https://bn1303files.storage.live.com/y4mXfcFebdLEuOPWCwQNufm0i0CUQN094wIb7sdvLO7HRAGnxneSTIhZJQ8iYx7doxqc9PfZY8lWcIFQ6AjX1yZWv_qRMuBLqe_h6ijO2D-eOsIQxpU02fWhjYIx7JtuJmkPNkGmUYeMCI231l7C0V3c-Yu5jDp8f5_f1Awl7pgKFH1rJaaD0T69lJWm3YLz8bX?width=5505&height=3670&cropmode=none"  position= 'center' width="512px" margin="auto" alt='cardtitle'></img>
            </div><br/><br/><br/><br/><br/>
             

            <div className= "body-two">
                <h1>2) Meet With Us At Your Property And Get An Offer </h1>
                <p>
                Since we are a local home buying company on Long Island, we will meet you at your
                 property at a time that works best for you. We walk your property with you and 
                 discuss some of the details of your home to get the best idea of what repairs 
                 might be needed. Don’t worry though, you are not responsible for making any 
                 repairs. We handle that for you.
                </p><br/><br/>
                <img src="https://p1.pxfuel.com/preview/292/644/900/meeting-informal-business-team.jpg" alt='cardtitle' width="512px" margin="auto" ></img>
            </div><br/><br/><br/><br/><br/>

            <div className= "body-three">
                <h1>3) Attend Closing And Get Your Check</h1>
                <p>Once you accept our offer, we send our purchase and sale agreement to the
                     attorney you choose to represent you to get the contract drawn up.

                    Once contracts are signed by both of us, title work can begin. This can
                     take as little as a few days or sometimes a few weeks. It all depends 
                     if there are any challenges in establishing a clear title. Our title
                      company works to clear the title and get our closing ready as quickly
                       as possible. We keep you informed if there are any questions along the way.

                    Once the title work is clear, we get the thumbs up to close. The attorneys 
                    schedule a day and time to close that works best for you. Once all paperwork
                     is signed, you receive your check or wire with the proceeds from the sale.
                     </p><br/><br/>

                     <img src="https://p1.pxfuel.com/preview/795/156/847/checklist-choice-priorities-survey.jpg" alt='cardtitle'  width="600" height="400"></img>
            </div><br/><br/><br/><br/><br/>

                <Form/>

              </div>
        )
    }
}

export default howItWorks