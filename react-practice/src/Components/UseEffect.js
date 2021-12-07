import { useState, useEffect, React } from "react";

function UseEffect() {
    const [Val,setVal] = useState("");
    const [Color,setColor] = useState("black");
    const color = ["red","green","yellow"];
    function handleChange(event){
      setVal(event.target.value);
    }

    //every time it loads 
    useEffect(() => {
       alert("Welcome,this is alert from useEffect Hook!")
    }, [])

    //on change of Val
    useEffect(() => {
        setColor(Val);
        if(Color == "green"){
            console.log("say true");
        }
        console.log("color is :",Color);
      console.log("Value is: "+ Val);
    }, [Val])
  return (
    <div>
      <h1 style={{color: Color}}>Implementation of useEffect Hook</h1>
      <p>Type color name to change heading: {Val}</p>
      <input onChange={handleChange} type="text"></input>
    </div>
  );
}

export default UseEffect;
