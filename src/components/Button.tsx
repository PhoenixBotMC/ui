import React, { Component, MouseEventHandler } from "react";

class Button extends Component<{ classNames?: string; onClick: MouseEventHandler<HTMLButtonElement> }> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button className={`btn btn-primary shadow-sm ${this.props.classNames}`} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
