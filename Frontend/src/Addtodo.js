import React, { Component } from "react";

class Addtodo extends Component {
  onAdd = () => {
    this.props.setText("");
    this.props.addNew(this.props.text);
    //CHange  the state in the parent component
    //current item text''s
  };
  onTextChange = event => {
    this.props.setText(event.target.value);
  };

  render() {
    const { text } = this.props;
    return (
      <>
        <label>
          Item :
          <input type="text" value={text} onChange={this.onTextChange} />
        </label>
        <button onClick={this.onAdd}>ADD!</button>
      </>
    );
  }
}

export default Addtodo;
