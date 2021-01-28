import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Comp.css"
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

class Comp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             quant:1,
             name:props.name,
             img:props.image,
             price:props.price
        }
    }
    dec(){
        if(this.state.quant>1){
            this.setState((prevstate)=>({
                quant:prevstate.quant-1
            }))
        }
    }
    inc(){
        this.setState((prevstate)=>({
            quant:prevstate.quant+1
        }))
    }

    /* submit = (e) => {
        confirmAlert({
          title: 'Waiting for your order confirmation',
          message: '',
          buttons: [
            {
              label: 'Yes',
              onClick: () => {M.toast({
                  html:"New product has been added",
                  classes:"toast"
              });console.log("called"+e.target.value)}
            },
            {
              label: 'No',
              onClick: () => alert('Click No')
            }
          ]
        });
      }; */
      

    render() {
        const {quant} = this.state
        const {name,img,price,id} = this.props
        return (
            <div className = "w3-col s5 m2 w3-margin-left" >
                <img src ={img} alt ="veg"
                width = "160" height ="150" className = "img"></img>
                <p>{name}</p>
                <p><b>Rs {price}</b> </p>
                <span><button onClick ={() => this.dec()} className = "ind" >-</button><input type = "text" className="quant" value ={this.state.quant} disabled></input>
                <button onClick = {()=> this.inc()} className = "ind" >+</button></span>
                <p><button className = "ac" onClick ={this.props.submit} value = {[quant,name,price,img,id]} >ADD TO CART</button></p>
            </div>
        )
    }
}

export default Comp
