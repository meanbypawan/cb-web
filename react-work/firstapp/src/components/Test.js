import { Component } from "react";
// Object Of Test Class say obj
// this = obj (state :{counter})
export default class Test extends Component{
    constructor(){
        super();
        this.state = {
            counter : 100
        }
    }
    checkOutThis(){
        console.log(this); // this will be undefined
    }
    changeCounter(){
      console.log(this);
    }

    passMyMessage = (message)=>{
        window.alert(message);
    }
    render(){
        return <>
          <h1 style={{color:"red", backgroundColor:"orange"}}>Test Component</h1>
          <hr/>
          <button onClick={this.changeCounter.bind(this)}>Click Me ({this.state.counter})</button>
          <button onClick={this.checkOutThis.bind(this)}>Checkout This</button>
          <button onClick={()=>{this.passMyMessage("Hello Friends")}}>Pass My Message</button>
        </>
    }
}