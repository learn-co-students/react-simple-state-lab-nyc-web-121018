import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  render() {
    return (
      <div
        style={{ backgroundColor: this.state.color }}
        className="cell"
        onClick={this.handleClick}
      />
    );
  }

  handleClick = () => {
    this.setState({
      color: "#333"
    });
  };
}
