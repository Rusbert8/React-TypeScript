import React from "react";
import { Counter } from "./Components/Counter";
import { TimerPadre } from "./Components/TimerPadre";
import { User } from "./Components/User";
import { CounterRed } from "./Components/CounterRed";

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>

      <hr/>

      <Counter />

      <User />

      <TimerPadre />

      <CounterRed />
    </>
  );
}

export default App;
