import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Tarefas from "./components/Tarefas";

function App() {
  return (
    <div className="App">
      <Tarefas titulo="todo list" />
    </div>
  );
}

export default App;
