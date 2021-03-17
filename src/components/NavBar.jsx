import React, { Component } from 'react';
import logo from '../assets/logo.png'
import NavContainer from './NavContainer'; 
import App from '../App'; 

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
                        text: "Home", 
                        component: App
                    }, 
                    {
                        link: "/Bot", 
                        text: "Bot", 
                        component: App
                    }
                ]}/>
            </nav>
         );
    }
}
 
export default NavBar;