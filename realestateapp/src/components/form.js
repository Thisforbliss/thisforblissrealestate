import React, {Component} from 'react'
//create action import {addSeller} from '../actions'
//import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'
import emailjs from 'emailjs-com'
import {withRouter} from 'react-router-dom'


class Forms extends Component {

  constructor () {
    super()

    this.state = {
      address: '',
      email: '',
      phoneNumber: '' 
    }
  }

  handleOnChange = event => {
    console.log(event.target.value)
    this.setState({
      [event.target.name] : event.target.value
    })
  }



  handleOnSubmit = event => {
    event.preventDefault()

    this.sendEmail()

    this.setState({
      address: '',
      email: '',
      phoneNumber: ''
    })

    
    this.props.history.push("/thanks")
  }

  sendEmail = e => {
    emailjs.init('user_S8JcuKT3UPVSyHXmT73uf');
    emailjs.send(
      'service_33h8alp',
      'template_y4f3tdo',
      this.state
    )
    .then(res => console.log(res))
    //.catch(err => console.log(SEND_FAIL, "The form was not submitted."))
  }


    render(){
        return(
           <div className = "input-form">
             <form style={{textAlign: 'center'}} className= 'seller-form' onSubmit={(event) => this.handleOnSubmit(event)}>

              <h5>Just fill in this simple form and we will be in touch. Or give us a call at (732) 641-6352</h5>
             <div className='formBox' >

             
              <input required type= 'text' name= 'address' value={this.state.address} placeholder = 'address' onChange={(event) => this.handleOnChange(event)} /><br/>
              <input required type= 'text' name= 'email' value={this.state.email} placeholder = 'email' onChange={(event) => this.handleOnChange(event)}/><br/>
              <input required type= 'text' name= 'phoneNumber' value={this.state.phoneNumber} placeholder = 'phoneNumber' onChange={(event) => this.handleOnChange(event)}/><br/>
              {/* <textarea rows="3" cols="35"></textarea> */}
              <Button as='input' type="submit" value="Get Your Offer"/>
              </div>
             </form>
           </div> 
        )
    }
}

export default withRouter(Forms)
