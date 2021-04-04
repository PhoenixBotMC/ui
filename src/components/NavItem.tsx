import React, { Component } from "react";
import { Link } from "react-router-dom";

interface INavItemProps {
  link: string;
  text: string | JSX.Element;
}

class NavItem extends Component<INavItemProps> {
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
