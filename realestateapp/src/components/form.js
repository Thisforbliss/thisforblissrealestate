import React, {Component} from 'react'
//create action import {addSeller} from '../actions'
//import {connect} from 'react-redux'


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
             <form class= 'seller-form' onsubmit={(event) => this.handleOnSubmit(event)}>

               
             </form>

           </div> 
        )
    }
}

export default Forms