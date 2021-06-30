import React, { memo } from "react";

const Child1 = (props) => {
  function changeNumber() {
    props.changeNumber(Math.random());
  }

  console.log("here");
  return (
    <div>
      <h1>Child: {props.number}</h1>
      <button onClick={changeNumber}>Click to change child number</button>
    </div>
  );
};

export default memo(Child1);
