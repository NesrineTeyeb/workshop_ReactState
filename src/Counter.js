import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("Constructor has been created");
  }
  componentDidMount() {
    console.log("Componentdidmount:  Component has been mounted ");
  }
  increment = () => {
    this.setState({count:this.state.count + 1});
  };
  decrement = () => {
    this.setState({count:this.state.count - 1});
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    console.log("Render: Component is rendering");
    return (
      <div>
        <h1> This is our counter</h1>
        <button onClick={this.increment}>+</button>
        <p>Current Count : {this.state.count}</p>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Clear</button>
      </div>
    );
  }
}

export default Counter;
