import { Component } from "react";

export default class StateClasscom extends Component{
    state={
        color:"Yellow",
        price:100
    }
    handleChange=()=>{this.setState({color:"Purple"})}
    render()
    {
        return(
            <div>
                <h1>I love {this.state.color} and the price is {this.state.price}</h1>
                <button onClick={this.handleChange}>Click Me</button>
            </div>
        )
    }
}