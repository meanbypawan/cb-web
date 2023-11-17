import { Component } from "react";

export default class LifeCycleComponent extends Component{
    constructor(){
        super();
        this.state = {
            counter:100
        };
        console.log("Constructor called...");
    }
    render(){
       console.log("Render called...."); 
       return <>
          <h1>Life Cycle Component...</h1>
          <button onClick={()=>this.setState({counter: this.state.counter+1})}>({this.state.counter})</button>
       </>
    }
    componentDidMount(){
        console.log("Component Did Mount Called....");
    }

    componentDidUpdate(){
        console.log("Component Did Update Called...");
    }
    componentWillUnmount(){
        console.log("Component Will Unmount called...");
    }
}