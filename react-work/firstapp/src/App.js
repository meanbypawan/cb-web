import { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import CounterComponent from "./components/CounterComponent";
import Test from "./components/Test";
import List from "./components/List";

class App extends Component{
  constructor(){
    super();
    console.log("App Constructor called.....");
  }
  render(){
    return <div className="container mt-5">
      {/* <Header/>
      <Content/>
      <Footer/>
      <CounterComponent/> 
      <Test/>
      */}
      <List/>
      
    </div>
  }
}

export default App;