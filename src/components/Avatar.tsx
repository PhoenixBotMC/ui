import React, { Component } from "react";
import { NavDropdown } from "react-bootstrap";

interface IAvatarProps {
  link: string;
  name: string;
}

class Avatar extends Component<IAvatarProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async logout() {
    await fetch(`http://${process.env.REACT_APP_SERVER}/api/oauth/logout`, {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/";
  }

  render() {
    return (
      <div className="float-right navbar-nav">
        <img src={this.props.link} alt="Avatar" className="rounded-circle w-25 d-inline mr-2" />
        <div className="d-inline mt-3">
          <NavDropdown title={this.props.name} id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1" onClick={this.logout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    );
  }
}

export default Avatar;
