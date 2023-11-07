import { Component } from "react";
import { HeaderLogo } from "./HeaderLogo";
import "./Header.css";
export default class Header extends Component{
    render(){
        return <>
          <h1 className="text-warning">Header Component....</h1> 
          <HeaderLogo/>
        </>
    }
}