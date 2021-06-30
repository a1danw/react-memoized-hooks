import React, { useState, useCallback, useMemo } from "react";
import Child from "./Child1";

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

const Example1 = () => {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);
  const [arr, setArr] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]);
  // accepts 2 arguments and returns a new function
  // first argument is the function you want to memoize then what function you want to memoize
  // then take the number we receive and pass it to the function and we have a dependency array
  // memoized callback will now always be the same function in memory - we now dont ever create a new function

  // previously we were creating a new function on every render cycle
  const memoizedCallback = useCallback(
    (number) => changeChildNumber(number),
    []
  );

  // caches the value the function outputs - until such time that the arguments of this function depends on change
  const memoizedValue = useMemo(() => getLargestNumber(), [arr]);

  function incrementLocal() {
    setLocalNumber((state) => state + 1);
  }

  // useCallback
  // by passing down a function as a prop to the child it breaks the memo - component will no longer be memoized
  // pass down changeChildNumber function down as a prop to a child component - in every single render where esentially creating
  // an entirely brand new function

  function changeChildNumber(number) {
    setChildNumber(number);
  }

  // were basically passing down the changeChildNumber down as a prop to the child
  // every single render were creating an entirely brand new function
  // the react memo function we wrapped child component round - what its trying to do to determine whether or not a new prop has passed down is
  // its trying to do referential equality - its not interested in comparing values
  // its checking the objects to see if there in the same place in memory

  function getLargestNumber() {
    console.log("I am working");
    return Math.max(...arr);
  }

  function changeArray() {
    setArr([60, 70, 80, 90]);
  }
  return (
    <div>
      <Child changeNumber={memoizedCallback} number={childNumber} />
      <button onClick={incrementLocal}>Click to increment local</button>
      <h1>Local: {localNumber}</h1>
      <h1>Largest Number: {memoizedValue}</h1>
      <button onClick={changeArray}>Change array</button>
    </div>
  );
};

export default Example1;

// referential equality:
// const x = 10;
// const b = 10;

// console.log(x === b) true
// const x = {
//     key: 10
// }

// const b = {
//     key: 10
// }
// console.log(x === b) false

// even though the objects look the same if you compare one to the other you get false
// whenever we compare objects in js what were doing is checking the referential equality
// basically were trying to see if both of these objects are alocated in the same space in memory

// b = x
