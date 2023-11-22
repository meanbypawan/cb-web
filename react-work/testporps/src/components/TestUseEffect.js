import { useEffect, useState } from "react";
import Header from "./Header";

export default function TestUseEffect(){
    const [counter,setCounter] = useState(100);
    useEffect(()=>{
        console.log("Simple Flever of useEffect..");
    });
    useEffect(()=>{
        console.log("useEffect Flever with Blank Dependency Array");
    },[])
    useEffect(()=>{
        /* Run this code when counter state change */
        console.log("Hello Friends Counter Changed...");
    },[counter]);
    useEffect(()=>{
        console.log("useEffect with clean up code..");
        return ()=>{
            console.log("useEffect Flever with Clean up code..***************");
        }
    },[]);
    return <>
      <Header/>
      <h1>Use Effect Hook Component...</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter: {counter}</button>
    </>
}