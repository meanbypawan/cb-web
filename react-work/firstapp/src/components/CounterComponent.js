import { Component } from "react";
/*
  It will create object CounterComponent(Property: state :{counter:100})
     Constructor

*/
export default class CounterComponent extends Component{
    constructor(){
        super();
        this.state = {
            counter: 100,
            evenCounter : 0,
            oddCounter: 1
        };
    }
    incrementCounter = ()=>{
        //this.state.counter = this.state.counter + 1;
        //this.forceUpdate();
        this.setState({counter : this.state.counter + 1});
    }
    incrementOddCounter = ()=>{
      this.setState({oddCounter: this.state.oddCounter + 2, counter: this.state.counter + 1});
    }
    incrementEvenCounter = ()=>{
      this.setState({evenCounter: this.state.evenCounter + 2, counter: this.state.counter + 1});
    }
    sayHello(){
        window.alert("Hello Friends....");
    }
    render(){
        console.log("Render Called....");
        return <>
        <h1>Counter Component....</h1>
        <hr/>
           <button onClick={this.sayHello}>Say Hello</button>
           <button onClick={this.incrementCounter}>Counter : ({this.state.counter})</button>
           <button onClick={this.incrementOddCounter}>Odd Counter ({this.state.oddCounter})</button>
           <button onClick={this.incrementEvenCounter}>Even Counter ({this.state.evenCounter})</button>
        </>
    }
}