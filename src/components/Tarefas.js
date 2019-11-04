import React, { Component } from "react";

class Tarefas extends Component {
  // crie um constructor com tarefas
  constructor(props) {
    super(props);
    this.state = {
      tarefas: "",
      tarefas: ["tarefas", "tarefa1", "tarefa2"]
    };
    // the um bind nos metodos
    this.handleChange = this.handleChange.bind(this);
    this.addTarefa = this.addTarefa.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ tarefa: event.target.value });
  }

  addTarefa() {
    const { tarefa, tarefas } = this.state;
    this.setState({
      tarefa: "",
      tarefas: [].concat(tarefas, tarefa)
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.titulo}</h1>
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
