import { useState } from "react"

export default function First(){
    // counter, setState
    const [counter,setCounter] = useState(100);
    const changeCounter = ()=>{
        setCounter(counter+1);
    }
    return <>
     <h1>It is My First Functional Component...</h1>
     <button onClick={changeCounter}>Counter ({counter})</button>
    </>
}