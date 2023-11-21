import { useState } from "react"
import Data from "./Data.js"
import StudenTable from "./StudentTable.js";
import StudentForm from "./StudentForm.js";
export default function StudentRecord(){
    let  [studentList,setStudentList] = useState(Data);
    let [branchList,setBranchList] = useState(["CS","IT","EC","MECH"]);
    let [id,setId] = useState(null);
    let [name,setName] = useState(null);
    let [branch,setBranch] = useState(null);
    let [mobile,setMobile] = useState();
    let [activeBranch,setActiveBranch] = useState("all");
    return <>
      <StudentForm id={id} setId={setId} branchList={branchList} setBranchList={setBranchList} name={name} setName={setName} branch={branch} setBranch={setBranch} mobile={mobile} setMobile={setMobile} activeBranch={activeBranch} setActiveBranch={setActiveBranch} studentList={studentList} setStudentList={setStudentList}/>

      <StudenTable studentList={studentList} activeBranch={activeBranch}/>
      
    </>
}