import { Component } from "react";
import data from './Data.js';
export default class StudentList  extends Component{
    constructor(){
        super();
        this.state = {
            studentsList: data,
            branchList: ["CS","IT","EC","MECH"],
            id: null,
            name: null,
            branch:null,
            mobile: null,
            activeBranch : "all",
            idStatus: false
        }
    }
    setId = (event)=>{
        this.setState({id: event.target.value});
        let obj = this.state.studentsList.find((student)=>student.id == event.target.value);
        if(obj){
            this.setState({idStatus: true})
        }
        else
          this.setState({idStatus: false});
    }
    addRecord = ()=>{
        let {id,name,branch,mobile} = this.state;
        this.setState({studentsList: [...this.state.studentsList,{id,name,branch,mobile}]});
    }
    render(){
        return <>
         <div className="container">
            <div className="row mt-3 mb-3">
                <div className="col-md-6">
                    <input onChange={this.setId} type="text" placeholder="Student Id" className="form-control"/>
                    {this.state.idStatus ? <small className="text-danger">Id is already taken</small> :""}
                </div>
                <div className="col-md-6">
                    <input onChange={(event)=>this.setState({name: event.target.value})} type="text" placeholder="Student name" className="form-control"/>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-md-6">
                  <select onChange={(event)=>this.setState({branch: event.target.value})} className="form-control">
                   {this.state.branchList.map((branch,index)=><option key={index}>{branch}</option>)}
                  </select>
                </div>
                <div className="col-md-6">
                    <input onChange={(event)=>this.setState({mobile: event.target.value})} type="text" placeholder="Contact number" className="form-control"/>
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-md-6">
                    <button onClick={this.addRecord} className="btn btn-success">ADD</button>
                </div>
                <div className="col-md-6">
                    <button onClick={()=>this.setState({activeBranch: "CS"})} className="btn btn-outline-success ml-2">CS({this.state.studentsList.filter((student)=>student.branch=="CS").length})</button>
                    <button onClick={()=>this.setState({activeBranch: "IT"})} className="btn btn-outline-primary ml-2">IT({this.state.studentsList.filter((student)=>student.branch=="IT").length})</button>
                    <button onClick={()=>this.setState({activeBranch: "EC"})} className="btn btn-outline-warning ml-2">EC({this.state.studentsList.filter((student)=>student.branch=="EC").length})</button>
                    <button onClick={()=>this.setState({activeBranch: "MECH"})} className="btn btn-outline-secondary ml-2">MECH({this.state.studentsList.filter((student)=>student.branch=="MECH").length})</button>
                    <button onClick={()=>this.setState({activeBranch: "all"})} className="btn btn-outline-danger ml-2">Total({this.state.studentsList.length})</button>
                    
                </div>
            </div>
         </div>
          <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.studentsList.filter((student)=>this.state.activeBranch == "all" || student.branch==this.state.activeBranch).map((student,index)=><tr key={index}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.branch}</td>
                        <td>{student.mobile}</td>
                    </tr>)}
                </tbody>
            </table>
          </div>
        </>
    }
}