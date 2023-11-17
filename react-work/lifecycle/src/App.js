import { Component } from "react";
import LifeCycleComponent from "./LifeCycleComponent";
import First from "./First";

export default class App extends Component{
  render(){
    return <>
       <LifeCycleComponent/>
       <First/>
    </>
  }
}