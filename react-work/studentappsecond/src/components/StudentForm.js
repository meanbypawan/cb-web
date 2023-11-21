export default function StudentForm({studentList, setStudentList,id,setId,branchList, setBranchList,name,setName,branch,setBranch,mobile,setMobile,activeBranch,setActiveBranch}) {
    return <>
        <div className="container-fluid mt-5">
            <div className="row mt-2 mb-2">
                <div className="col-md-6">
                    <input onChange={(event) => setId(event.target.value)} type="text" placeholder="Student id" className="form-control" />
                </div>
                <div className="col-md-6">
                    <input onChange={(event) => setName(event.target.value)} type="text" placeholder="Student name" className="form-control" />
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-md-6">
                    <select className="form-control" onChange={(event) => setBranch(event.target.value)}>
                        <option>Select branch</option>
                        {branchList.map((branch) => <option>{branch}</option>)}
                    </select>
                </div>
                <div className="col-md-6">
                    <input onChange={(event) => setMobile(event.target.value)} type="text" placeholder="Student contact number" className="form-control" />
                </div>
            </div>
            <div className="row mt-2 mb-2">
                <div className="col-md-6">
                    <button onClick={() => setStudentList([...studentList, { id, name, branch, mobile }])} className="btn btn-success">ADD</button>
                </div>
                <div className="col-md-6">
                    {branchList.map((branch, index) => <button className={index == 0 ? "btn btn-success ml-2" : index == 1 ? "btn btn-warning ml-2" : index == 2 ? "btn btn-secondary ml-2" : "btn btn-primary ml-2"} onClick={() => setActiveBranch(branch)}>{branch}({studentList.filter((student) => student.branch == branch).length})</button>)}

                    <button onClick={() => setActiveBranch("all")} className="btn btn-danger ml-2">Total :({studentList.length})</button>
                </div>
            </div>
        </div>
    </>
}