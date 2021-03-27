import React, { Component } from "react";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      children: props.children,
      classNames: props.className || "",
      src: props.src,
      handleClick: props.onClick,
    };
  }

  render() {
    return (
      <button
        className={`btn btn-primary shadow-sm ${this.state.classNames}`}
        onClick={this.state.handleClick}
      >
        {this.state.children}
      </button>
    );
  }
}

export default Button;
