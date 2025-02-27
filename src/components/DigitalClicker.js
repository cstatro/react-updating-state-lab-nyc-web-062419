// Code DigitalClicker Component Here
import React, { Component } from "react";

class DigitalClicker extends Component {
  state = { timesClicked: 0 };

  handleClick = () => {
    const newNum = this.state.timesClicked + 1;
    this.setState({ timesClicked: newNum });
    console.log(newNum);
  };

  render() {
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}

export default DigitalClicker;
