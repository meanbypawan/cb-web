import { Component } from "react";

export default class List extends Component{
    render(){
        let colorList = ["Red","Blue","Green","Pink","Yellow","Black"];
        
        return <>
          <h1>List Component</h1>
          <hr/>
          {colorList.map((color)=>{return <h1>{color}</h1>})}
        </>
    
  }
}
/*
   [<p>Red</p>,<p>Blue</p>,<p>Green</p>,<p>Pink</p>,<p>Yellow</p>,<p>Black</p>]
*/