import React from "react";
//import MyTarefas from "./components/MyTarefas";
import Task from "./components/With-arrow";

import { Provider } from "react-redux";
import { store } from "./redux";

function App() {
  return (
    <Provider store={store}>
      <Task titulo="todo list" />
    </Provider>
  );
}

export default App;
