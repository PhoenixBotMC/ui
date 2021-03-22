import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      children: props.children, 
      classNames: props.className || "", 
      src: props.src, 
      handleClick: props.onClick
    }; 

    console.log(props.src);
  }

  handleClick(e) {
    e.preventDefault(); 
    console.log(this.state);
    // window.location.href = this.state.src; 
  }

  componentDidUpdate() {
    console.log("Button UPDATED!!!"); 
  }

  render() {
    return (
      <button className={`btn btn-primary shadow-sm ${this.state.classNames}`} onClick={this.state.handleClick}>{this.state.children}</button>
    ); 
  }
}

export default Button; 