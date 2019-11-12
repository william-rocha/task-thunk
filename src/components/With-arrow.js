import React, { Component, createRef } from "react";

import { getAll } from "../api";

import { log } from "../utils";

import { store, actions } from "../redux";

console.log(store);

class App extends Component {
  state = {
    task: "",
    tasks: []
  };

  constructor(props) {
    super(props);

    this.appTitle = createRef();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        task: "",
        tasks: store.getState().taskReducer.tasks
      });
    });

    const { current } = this.appTitle;
    if (current) {
      current.addEventListener("click", log);
    }
  }

  componentWillUnmount() {
    const { current } = this.appTitle;
    if (current) {
      current.removeEventListener("click", log);
    }
  }

  render() {
    const { task, tasks } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title" ref={this.appTitle}>
            WITH REDUX
          </h1>
          <form className="App-form">
            <input
              className="App-input"
              onChange={this.handleInputChange}
              type="text"
              value={task}
            />
            <button
              className="App-btn"
              onClick={this.handleBtnClick}
              type="button"
            >
              Add
            </button>
          </form>
          <table className="todo-table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(task => (
                <tr key={task}>
                  <td>{task}</td>
                  <td>
                    <button
                      className="todo-table-btn"
                      onClick={() => this.handleRemove(task)}
                      type="button"
                    >
                      Done
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </header>
      </div>
    );
  }

  // handleBtnClick = () => this.setState(({ task, tasks }) => ({ tasks: [].concat(tasks, task) }));

  handleBtnClick = () => {
    const { task } = this.state;
    store.dispatch(actions.add(task));
  };

  handleRemove = task => store.dispatch(actions.remove(task));

  handleInputChange = e => this.setState({ task: e.target.value });
}

export default App;
