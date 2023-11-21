// props : {evenCounter:0, setEvenCounter: ()=>{}}
// it is object
export default function EvenCounter({evenCounter, setEvenCounter}){
    return <>
      <h1>It is Even Counter Component...</h1>
      <button onClick={()=>setEvenCounter(evenCounter+2)}>Even Counter : {evenCounter}</button>
    </>
}