import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import { confirmAlert } from 'react-confirm-alert';

class minicomp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             fcart:props.val,
             x:props.x1,
             price:props.price,
             quant:parseInt(props.quant),
             x2:props.x2,
             x1:0,
             id:props.id,
             c:true
        }
    }
    dec(e){
        if(this.state.quant>0){
            this.setState((prevstate)=>({
                quant:prevstate.quant -1,
            }),()=>{this.props.check(parseInt(-this.state.price))},
            )
        }
        /* else if((this.state.quant-1) == 0){
            this.setState({
                c:false
            })
        } */
        if((this.state.quant-1)===0){
            confirmAlert({
                title:'Confirm',
                message:'Are you sure want to delete',
                buttons:[
                    {
                        label:'Yes',
                        onClick:()=>{
                            this.setState({
                                c:false
                            },this.props.check(-this.state.price*this.state.quant*this.state.x2))
                        }
                    },
                    {
                        label:'No',
                        onClick:()=>{
                            this.setState((prevstate)=>({
                                quant:prevstate.quant+1
                            }),this.props.check(this.state.price*this.state.x2))
                        }
                    }
                ]
            })
        }
    }
    inc(e){
        /* this.c1(); */
        this.setState((prevstate)=>({ 
            quant:prevstate.quant+1,
        }),()=>this.props.check(parseInt(this.state.price)))
    }

    change(e){
        console.log(this.state.price*this.state.quant*this.state.x2);
        this.props.check(this.state.price*this.state.quant*this.state.x2)
    }
    del(e){
        confirmAlert({
            title:'Confirm',
            message:'Are you sure want to delete',
            buttons:[
                {
                    label:'Yes',
                    onClick:()=>{
                        this.setState({
                            c:false
                        },this.props.check(-this.state.price*this.state.quant*this.state.x2))
                        this.props.d1(this.state.id)
                    }
                },
                {
                    label:'No'
                }
            ]
        })
        
    }
    render() {
        const {fcart,x,x1,x2,c,quant} = this.state
        const {name,image,price,check} = this.props
        return (c?
            <div className = 'fitems1' onLoad ={(e)=>this.change(e)} value ={price*quant*x2} >
                <div className = 'f1'><img src = {image} width = '90px' alt = 'logo' value ={price*quant*x2} ></img> </div>
                <div className = 'f2'>{name}</div>
                <div className = 'f3'><button onClick = {(e) => this.dec(e)}  >-</button><input className ='f5' type ='text'
                 onLoad = {(e)=>this.change(e)} value ={quant} readOnly></input><button onClick = {(e)=>this.inc(e)} >+</button></div>
                <div className = 'f4'>₹{price}</div>
                <div className = "fs" >
                    <p value = {price*quant*x2} >{price*quant*x2}</p>
                </div>
                <div className = 'f6' onClick = {(e)=>this.del(e)} ><FontAwesomeIcon icon={faTrashAlt} /></div>

            </div> :null
        )
    }
}

export default minicomp
