import { Component } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

class App extends Component{
  constructor(){
    super();
    console.log("App Constructor called.....");
  }
  render(){
    return <div className="container mt-5">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  }
}

export default App;