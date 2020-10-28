import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'


class LandingPage extends Component {
    render(){
        return(
            <div style= {{ width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img className= "avatar-img"
                        src="https://media-exp1.licdn.com/dms/image/C4D35AQFw4mE55SqIFg/profile-framedphoto-shrink_200_200/0?e=1603980000&v=beta&t=JedS6YdM7YH-gYumtKxF0REqzl4LtRSCVGIxyywdxGw"/>
                   
                        <div className="banner-text">
                            <h1>ThisForBliss RealEstate</h1>
                        <hr/>
                        
                        </div>
                   
                   
                    </Cell>
                </Grid> 
            </div>
        )
    }
}

export default LandingPage