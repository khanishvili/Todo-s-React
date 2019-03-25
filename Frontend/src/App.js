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
  addNew = text => {
    const newTodos = [...this.state.todos, text];
    this.setState({ todos: newTodos });
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
