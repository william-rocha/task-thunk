import React, { Component } from "react";

class Tarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tarefas: "",
      tarefas: ["tarefas", "tarefa1", "tarefa2"]
    };
    this.handleChange = this.handleChange.bind(this);
    this.addTarefa = this.addTarefa.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ tarefa: event.target.value });
  }

  addTarefa() {
    const { tarefa, tarefas } = this.state;
    // primeiro limpa tarefa
    this.setState({
      tarefa: "",
      tarefas: [].concat(tarefas, tarefa)
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
        {/* passano tarefa como value */}
        <input onChange={this.handleChange} value={this.state.tarefa}></input>
        <button onClick={this.addTarefa}>addicionar</button>
        <ul>
          {this.state.tarefas.map(tarefa => (
            <li key={tarefa}>{tarefa}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Tarefas;
