import React, { Component } from "react";
import NavItem from "./NavItem";

class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateItems(items) {
    const generated = [];

    for (const item of items) {
      generated.push(
        <li className="nav-item">
          <NavItem
            link={item.link}
            text={item.text}
            component={item.component}
          />
        </li>
      );
    }
    return generated;
  }

  render() {
    return (
      <ul className="navbar-nav mr-auto">
        {this.generateItems(this.props.items)}
      </ul>
    );
  }
}

export default NavContainer;
