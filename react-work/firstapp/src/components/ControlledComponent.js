import { Component } from "react";
import data from "./data.js";

export default class ControlledComponent extends Component{
   constructor(){
    super();
    this.state = {
        customerList: data,
        cname : null,
        id: null,
        age: null,
        mobile: null
    }
   }
   deleteRecord = (index)=>{
     if(window.confirm("Are you sure ?")){
      this.state.customerList.splice(index,1);
      this.setState({customerList: [...this.state.customerList]});
     }
   }
   addRecord = ()=>{
     /* 
      let id = document.querySelector("#customerId").value;
      let cname = document.querySelector("#customerName").value;
      let age = document.querySelector("#customerAge").value;
      let mobile = document.querySelector("#customerMobile").value;

      let newCustomer = {id,cname,age,mobile};
      this.setState({customerList: [...this.state.customerList,newCustomer]});
    */
     /*
     let id  = this.idInput.value;
     let cname = this.nameInput.value;
     let age = this.ageInput.value;
     let mobile = this.mobileInput.value;
     
     let newCustomer = {id,cname,age,mobile};
     this.setState({customerList: [...this.state.customerList,newCustomer]});
     */

     this.setState({customerList: [...this.state.customerList,{id:this.state.id, cname: this.state.cname, age: this.state.age, mobile: this.state.mobile}]})
   }
   render(){
     return <>
       
       <div className="container">
          <div className="row">
            <div className="col-md-6">
                <input id="customerId" onChange={(event)=>{this.setState({id: event.target.value})}} type="text" placeholder="Enter Unique Id" className="form-control"/>
            </div>
            <div className="col-md-6">
                <input id="customerName" onChange={(event)=>{this.setState({cname: event.target.value})}} type="text" placeholder="Enter Name" className="form-control"/>
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="col-md-6">
                <input id="customerAge" onChange={(event)=>{this.setState({age: event.target.value})}} type="text" placeholder="Enter Age" className="form-control"/>
            </div>
            <div className="col-md-6">
                <input id="customerMobile" onChange={(event)=>{this.setState({mobile: event.target.value})}} type="text" placeholder="Enter Mobile" className="form-control"/>
            </div>
          </div>
          <div className="row mt-2 mb-2">
            <div className="col-md-6">
                <button className="btn btn-success" onClick={this.addRecord}>ADD</button>
            </div>
          </div>
          <table className="table">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Operation</th>
            </tr>
            <tbody>
            {this.state.customerList.map((customer,index)=><tr id={"row"+index} key={index}>
                <td>{customer.id}</td>
                <td>{customer.cname}</td>
                <td>{customer.age}</td>
                <td>{customer.mobile}</td>
                <td><button onClick={()=>this.deleteRecord(index)} className="btn btn-outline-danger">Delete</button></td>
            </tr>)}
            </tbody>
          </table>       
       </div>
     </>
   }
}