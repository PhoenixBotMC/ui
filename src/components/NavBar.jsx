import React, { Component } from 'react';
import logo from '../assets/logo.svg'
import NavContainer from './NavContainer'; 

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand btn-sm" href="/">
                    <img src={logo} className="App-logo" alt="Logo" />
                </a>

                <NavContainer items={[
                    {
                        link: "/", 
                        text: "Home"
                    }, 
                    {
                        link: "/Bot", 
                        text: "Bot"
                    }
                ]}/>
            </nav>
         );
    }
}
 
export default NavBar;