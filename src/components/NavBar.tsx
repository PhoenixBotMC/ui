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
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <a className='navbar-brand btn-sm' href='/'>
          <img src={logo.default} className='App-logo' alt='Logo' />
        </a>

        <NavContainer
          items={[
            {
              link: "/",
              text: <span className='font-weight-bold'>Home</span>,
            },
            this.state.isLoggedIn // SRRY THIS IS THE ONLY WAY I THOUGHT OF DOING IT, I KNOW ITS UGLY IF YOU FIND A WAY PLEASE TELL ME CUZ WTF IS THIS :/ :/
              ? {
                  link: "/user",
                  text: <span className='font-weight-bold'>User Dashboard</span>,
                }
              : {},
            this.state.isLoggedIn
              ? {
                  link: "/dashboard",
                  text: <span className='font-weight-bold'>Server Dashboard</span>,
                }
              : {},
            this.state.isLoggedIn
              ? {
                  link: "/bot",
                  text: <span className='text-warning font-weight-bold'>Bot Dashboard</span>,
                }
              : {},
            this.state.isLoggedIn
              ? {
                  link: "/premiumdashboard",
                  text: <span className='text-warning font-weight-bold'>Premium Dashboard</span>,
                }
              : {},
            {
              link: "/Premium",
              text: <span className='text-warning font-weight-bold'>Premium</span>,
            },
          ]}
        />

        <UserLogin parent={this} />
      </nav>
    );
  }
}

export default NavBar;
