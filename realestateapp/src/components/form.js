import React, {Component} from 'react'
//create action import {addSeller} from '../actions'
//import {connect} from 'react-redux'
import {Button} from 'react-bootstrap'

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

    this.props.addSeller({
      address: this.state.address,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber  
    })

    this.setState({
      address: '',
      email: '',
      phoneNumber: ''

    })
  }

    render(){
        return(
           <div>
             <form style={{textAlign: 'center'}} class= 'seller-form' onsubmit={(event) => this.handleOnSubmit(event)}>

              <h5>Just fill in this simple form and we will be in touch. Or give us a call at 631-595-0895</h5>
              <input required type= 'text' name= 'address' value={this.state.address} placeholder = 'address' onChange={(event) => this.handleOnChange(event)} /><br/>
              <input required type= 'text' name= 'email' value={this.state.email} placeholder = 'email' onChange={(event) => this.handleOnChange(event)}/><br/>
              <input required type= 'text' name= 'phoneNumber' value={this.state.phoneNumber} placeholder = 'phoneNumber' onChange={(event) => this.handleOnChange(event)}/><br/>
              <Button as='input' type="submit" value="Get Your Offer"/>
             </form>
           </div> 
        )
    }
}

export default Forms