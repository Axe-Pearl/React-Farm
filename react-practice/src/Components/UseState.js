import { useState, React } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  function handleClick(event) {
    const target = event.target.value;
    console.log(target);
    if (target === "Increase") {
      setCount(count + 1);
    } else if (target === "Reset") {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h1>Implementation of useState Hook</h1>
      <h4>Count : {count}</h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleClick}
          style={{ margin: "5px" }}
          value="Increase"
        >
          Increase Count
        </button>
        <button onClick={handleClick} style={{ margin: "5px" }} value="Reset">
          Reset
        </button>
        <button
          onClick={handleClick}
          style={{ margin: "5px" }}
          value="Decrease"
        >
          Decrease Count
        </button>
      </div>
    </>
  );
}

export default UseState;
