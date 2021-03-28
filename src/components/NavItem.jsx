import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Link className="nav-link" to={this.props.link}>
        {this.props.text}
      </Link>
    );
  }
}

export default NavItem;
