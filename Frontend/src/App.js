import React, { Component } from "react";
import Addtodo from "./Addtodo";
import TodoList from "./TodoList";
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentItemText: "sdfsdfsdf",
      todos: ["Add a todo", "Remove Todos"]
    };
  }
  componentDidMount() {
    fetch("https://localhost:44382/api/todos")
      .then(res => res.json())
      .then(json => this.setState({ todos: json }));
  }
  addNew = text => {
    fetch("https://localhost:44382/api/todos", {
      method: "POST",
      body: JSON.stringify(text),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (res.ok) {
          const newTodos = [...this.state.todos, text];
          this.setState({ todos: newTodos });
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  resetAll = () => {
    this.setState({ currentItemText: "", todos: [] });
  };
  setText = text => {
    this.setState({ currentItemText: text });
  };

  render() {
    return (
      <div>
        <Addtodo
          text={this.state.currentItemText}
          setText={this.setText}
          addNew={this.addNew}
        />
        <TodoList todos={this.state.todos} />
        <button onClick={this.resetAll}>Reset All</button>
      </div>
    );
  }
}

export default App;
