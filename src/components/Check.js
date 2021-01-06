import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from "axios"

class check extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       post:[]
    }
  }
  
  submit = () => {
    confirmAlert({
      title: 'Confirm to submit',                        // Title dialog
      message: 'Are you sure to do this.',               // Message dialog
      childrenElement: () => <div>Custom UI</div>,       // Custom UI or Component
      confirmLabel: 'Confirm',                           // Text button confirm
      cancelLabel: 'Cancel',                             // Text button cancel
      onConfirm: () => alert('Action after Confirm'),    // Action after Confirm
      onCancel: () => alert('Action after Cancel'),      // Action after Cancel
    })
  };

  componentDidMount(){
    axios.get("https://api.mocki.io/v1/7bd0682b")
      .then(res =>{
        console.log(res.data.products)
        this.setState({post:res.data.products})
      })
      .catch(error =>{
        console.log(error)
      })
  }
    render() {
      const {post} = this.state
        return (
            <div>
                <button onClick = {this.submit}>click</button>
            </div>
        )
    }
}

export default check
