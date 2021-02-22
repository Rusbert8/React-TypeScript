import React from "react";
import { Counter } from "./Components/Counter";
import { TimerPadre } from "./Components/TimerPadre";
import { User } from "./Components/User";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>

      <hr/>

      <Counter />

      <User />

      <TimerPadre />
    </>
  );
}

export default App;
