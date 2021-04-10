import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
class AboutUs extends Component {
    render(){
        return(

           <div>
            <div style={{width: '100%', height: '30%', margin: 'auto'}} className= 'about-us'> <h4>So Who Are We? </h4>
                 <Grid className= "grid">
                
                <Cell col={12}></Cell>
            </Grid>
            
            </div>
            <div className='aboutUs'>
                <body>
            <h6> ThisForBliss Real Estate is the New Jersey and New York's most respected 
                house buying service. We are a highly experienced in home buying that 
                is focused on helping homeowners like you to sell your house fast,
                without any hassle, games, or fees, and we’re committed to delivering 
                this service with transparency and integrity throughout the entire experience.

                We buy houses all over the country, including New Jersey and New York. 
                We know the area, which means our home buying team can help you sell your house fast 
                no matter where it is or what condition it’s in (and even if there are tenants).
 
                We are professional house buyers, which means we have our own cash and are ready to buy. 
                We can even make you an offer on the spot. Once we make you an offer you can choose
                whether or not you want to take that offer (and you can even shop it around if you want,
                talk it over with others, and think about it before deciding). We have a strict 
                no-pressure policy, and our many previous clients love it and are proof that it works.</h6>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
              </body>  
            </div>   
            
        </div>
        )
    }
}

export default AboutUs