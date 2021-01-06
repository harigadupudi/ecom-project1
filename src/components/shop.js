import React, { Component } from 'react'
import Mini from './minicomp'

class shop extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             fcart:props.val,
             x:props.x1,
             x1:0,
             x2:1,
             d1:props.del,
             c:false
        }
        this.c1 = this.c1.bind(this)
    }
    c1 = (data)=>{
        this.setState((prevstate)=>({
            x1:prevstate.x1+data
        }))
    }
    c2(e){
        console.log(e.target)
    }

    render() {
        const {fcart,x,x1,x2,c} = this.state
        return (
            <div className = "fcart" /* onClick = {this.props.hide} */>
                {/* <Link to ="/main" >Buy now</Link> */}
                <div className = 'fcitem'  >
                    <button onClick = {this.props.hide} className ='close'>x</button>
                    <div className = 'fitems' >
                        {
                            fcart.map(x => <Mini key = {x[1]} name = {x[1]} image = {x[3]} price = {x[2]} 
                            quant = {x[0]} value ={x[2]*x[0]} check = {this.c1} x2 = {x2} id ={x[4]}
                            d1 = {this.state.d1} ></Mini> )
                        }
                        <p className ='total' >Total - {this.state.x1}</p>
                        <button className = 'buy' >Buy items</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default shop
