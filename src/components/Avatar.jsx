import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="float-right navbar-nav">
        <img
          src={this.props.link}
          alt="Avatar"
          className="rounded-circle w-25 d-inline mr-2"
        />
        <div className="d-inline mt-3">
          <NavDropdown title={this.props.name} id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Logout</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    );
  }
}

export default Avatar;
