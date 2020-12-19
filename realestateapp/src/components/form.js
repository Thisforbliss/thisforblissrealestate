import React, {Component} from 'react'
//create action import {addSeller} from '../actions'
//import {connect} from 'react-redux'
import "../css/Form.css"
import {Button} from 'react-bootstrap'
import emailjs from 'emailjs-com'
//Address
//Email
//Phone Number
//add another component to schedule calls
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

    // this.props.addSeller({
    //   address: this.state.address,
    //   email: this.state.email,
    //   phoneNumber: this.state.phoneNumber  
    // })

    this.setState({
      address: '',
      email: '',
      phoneNumber: ''

    })

    
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
           <div className="input-form">
             <form className="seller-form" onSubmit={(event) => this.handleOnSubmit(event)}>

              <h5>Just fill in this simple form and we will be in touch. Or give us a call at (732) 641-6352</h5>
             <div className='formBox' >

             <label htmlFor="phoneNumber">Address</label>
              <input required class="formInput" id="address" type= 'text' name= 'address' value={this.state.address} onChange={(event) => this.handleOnChange(event)} />
              <label htmlFor="phoneNumber">Email</label>
              <input required class="formInput" id="email" type= 'text' name= 'email' value={this.state.email}  onChange={(event) => this.handleOnChange(event)}/>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input required class="formInput" id="phoneNumber" type= 'text' name= 'phoneNumber' value={this.state.phoneNumber}  onChange={(event) => this.handleOnChange(event)}/>
              

              {/* <textarea rows="3" cols="35"></textarea> */}
              <Button as='input' type="submit" value="Get Your Offer"/>
              </div>
             </form>
           </div> 
        )
    }
}

export default Forms