import React, { memo, useMemo } from "react";
import { isEqual } from "lodash";

const Child2 = (props) => {
  // because this component now depends on the counter prop - if the counter
  // prop changes we want the number to re-render - so we will see the console.log each time the counter is updated

  // however if we have more states in our parent component that get updated but arent anything to do with
  // the child component - the child will still get automatically re-rendered so we wrap it in Memo

  // this currently works how we want as at the moment were only passing primitive values down to this child
  // meaning were not passing down any functions/objects/arrays - those can give us problems as
  // memo does a shallow comparison of the previous props and the current props

  // what shallow comparison means for objects - non primitive data types like objects/functions/arrays is that
  // it only checks to see if the prop your passsing down is referencing the same place in memory
  // so if we pass down objects/functions/arrays it will break the use of memo and if when the state is changing
  // in the input of the parent component - the child component will re-render every time again breaking the memo

  // useMemo - for computer values that may take a long time

  const { counter, updateCounter } = props;

  // not computing the value every single time
  const childNumber = useMemo(() => {
    let output = 0;
    for (let i = 0; i < 500_000_000; i++) {
      output++;
    }
    return output;
  }, []);
  // let childNumber = 0;
  // for (let i = 0; i < 500_000_000; i++) {
  //   childNumber++;
  // }

  console.log("Child is rendering");
  return (
    <div>
      <h1>
        Child - {childNumber} {counter}
      </h1>
      <button onClick={updateCounter}>Update counter</button>
    </div>
  );
};

export default memo(Child2, isEqual);
