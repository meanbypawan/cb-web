export default function Message(props){
    console.log(props);
    const changeCounter = ()=>{
        props.setCounter(props.counter+1);
    }
    return <>
      <h1>It is message component...</h1>
      {props.wishingMessage} and My score is {props.score}
      <br/>
      <button onClick={changeCounter}>Counter:({props.counter})</button>
    </>
}