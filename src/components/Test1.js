import React, { Component } from 'react'
import Comp from './Comp'
import { confirmAlert } from 'react-confirm-alert';
import M from "materialize-css";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Shop from "./shop"

class Test1 extends Component {

    constructor(props) {
        super(props)
        /* this.add = this.add.bind(this) */
        this.state = {
            cart:[],
            post:[],
            fprice:[],
            x:[],
            cart1:new Set(),
            c:false 
        }
        this.del = this.del.bind(this)
    }
    
    /* add(){
        const {cart} = this.state
        this.setState({
            cart:[...cart,1]
        },()=>{console.log(this.state.cart)})
        confirmAlert({
            title: 'Confirm to submit',
            message: 'Are you sure to do this.',
            childrenElement: () => <div></div>,
            confirmLabel:"Confirm",
            cancelLabel:"Cancel",
            onConfirm:()=>M.toast({html: 'I am a toast!'}),
            onCancel:()=>M.toast({
                html:"Not Confirmed"
            })
          });
    } */
    componentDidMount(){
        axios.get("https://api.mocki.io/v1/7bd0682b")
            .then(res=>{
                this.setState({
                    post:res.data.products
                })
            } )
            .catch(error =>{
                console.log(error)
            })
            
    }
    hide(){
        this.setState({
            c:false
        })
    }
    show(){
        this.setState({
            c:true
        })
    }
    
    sub(e){
        confirmAlert({
            title: <p className ="confirm" >Waiting for your order confirmation</p>,
            message: '',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {M.toast({
                    html:"Successfully added!",
                    classes:"toasts",
                    displayLength:1800,        
                });
                const {cart,fprice,cart1,x} = this.state;
                console.log(e.target.value)
                console.log(e.target.value.split(",")[4])
                if(x.includes(e.target.value.split(",")[4])){
                    console.log("yes "+x.indexOf(e.target.value.split(",")[4]))
                    let x1 = [...cart];
                    x1[x.indexOf(e.target.value.split(",")[4])] = e.target.value.split(",");
                    console.log(x1);
                    this.setState({
                        cart:x1,
                    },()=>console.log(this.state.cart)) 
                }
                else{
                    this.setState({
                        cart:[...cart,e.target.value.split(",")],
                        x:[...x,e.target.value.split(",")[4]],
                        /* cart:cart.add([e.target.value]), */
                        cart1:cart1.add(e.target.value.split(",")[4],e.target.value),
                        /* fprice:[...fprice,(e.target.value.split(",")[2]*e.target.value.split(",")[0])] */
                    },()=>console.log(this.state.cart));
                }
                
                /* if(cart[0][0]==e.target.value.split(",")[1]){
                    console.log("yes")
                } */
            }
                
              },
              {
                label: 'No',
              }
            ]
          });
    }

    change(v){
        console.log(v)

    }
    
    final = (e) => {
        confirmAlert({
          title: 'Added items',
          buttons: [
            {
              label: 'Buy Now',
            },  
          ], 
        }
        );
    }
    del = (d)=>{
        console.log('ok ' +d)
        console.log(this.state.cart)
        let x2 = [...this.state.cart]
        x2.splice(this.state.x.indexOf(this.state.id),1)
        console.log(x2)
        this.setState({
            cart:x2
        },()=>console.log(this.state.cart.length))
    }

    render() {
        const {post} = this.state
        return (
            <div className ="contianer w3-padding-36 w3-mobile " >
                <div className ="w3-bar w3-sand" >
                    <h2 className ="w3-bar-item w3-text-blue" >ProMarket </h2>
                    <span className = " cart" onClick = {(e)=>this.show(e)} ><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span className = "cartValue"  >{this.state.cart.length}</span> 
                    {/* <span className = "w3-bar-item w3-right w3" onClick = {(e)=>this.show(e)} ><FontAwesomeIcon icon={faShoppingCart} /></span>
                    <span className = "w3-bar-item w3-right"  >{this.state.cart.length}</span> */}  
                      
                </div>
                {/* {
                    post.map(x=><p key ={x.id} >{x.image}</p> )
                } */}
                <div className = "w3-row">
                    {
                        post.map(x=> <Comp submit = {(e)=>this.sub(e)}
                        key ={x.id} id ={x.id} name ={x.name} img ={x.image} price = {x.price} ></Comp> )
                    }
                </div>
                {this.state.c ? <Shop hide = {(e)=>this.hide(e)} val = {this.state.cart} x1 = {this.state.x} del ={this.del} ></Shop> :null }
            </div>
        )
    }
}

export default Test1
