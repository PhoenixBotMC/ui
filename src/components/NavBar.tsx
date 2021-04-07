import React, { Component } from "react";
import NavContainer from "./NavContainer";
import UserLogin from "./UserLogin";
const logo = require("../assets/logo.png");

export interface INavBarState {
  isLoggedIn: boolean;
}

class NavBar extends Component<{}, INavBarState> {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand btn-sm" href="/">
          <img src={logo.default} className="App-logo" alt="Logo" />
        </a>

        <NavContainer
          items={[
            {
              link: "/",
              text: <span className="font-weight-bold">Home</span>,
            },
            {
              link: "/Bot",
              text: <span className="font-weight-bold">Bot</span>,
            },

            this.state.isLoggedIn
              ? {
                  link: "/dashboard",
                  text: <span className="font-weight-bold">Dashboard</span>,
                }
              : {},
            {
              link: "/Premium",
              text: <span className="text-warning font-weight-bold">Premium</span>,
            },
          ]}
        />

        <UserLogin parent={this} />
      </nav>
    );
  }
}

export default NavBar;
