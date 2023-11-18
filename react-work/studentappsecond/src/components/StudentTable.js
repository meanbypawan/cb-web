export default function StudenTable(){
    return <>
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
            {studentList.filter((student)=>activeBranch=="all" || activeBranch == student.branch).map((student,index)=><tr>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.branch}</td>
                <td>{student.mobile}</td>
            </tr>)}
        </tbody>
      </table>
    </>
}