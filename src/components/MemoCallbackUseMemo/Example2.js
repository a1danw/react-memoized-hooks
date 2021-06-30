import React, { useState, useCallback } from "react";
import Child2 from "./Child2";

function Example2() {
  const [counter, setCounter] = useState(0);
  const [input, setInput] = useState("");

  const arr = [1, 2, 3];

  // 1st paremeter - pass in function we want to memoize, 2nd - list of dependencies function depends upon
  const updateCounterFromChild = useCallback(
    () => setCounter(counter + 1),
    [counter]
  );

  return (
    <div>
      <h1>Hello from parent: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Child2
        arr={arr}
        counter={counter}
        updateCounter={updateCounterFromChild}
      />
    </div>
  );
}

export default Example2;
