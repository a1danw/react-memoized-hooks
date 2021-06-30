import React, { useState, useCallback } from "react";
import logo from "./logo.svg";
import "./App.css";

// useMemo example1
import UseMemoExample1 from "./components/UseMemo/Example1";
// useCallback example1
import UseCallbackExample1 from "./components/UseCallback/Example1";
// memo vs useCallback vs useMemo example 1
import MemoCallbackUseMemo from "./components/MemoCallbackUseMemo/Example1";
// memo vs useCallback vs useMemo example 1
import Memoizations from "./components/MemoCallbackUseMemo/Example2";
function App() {
  return (
    <div>
      <Memoizations />
    </div>
  );
}

export default App;
