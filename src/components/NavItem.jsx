import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"; 

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            link: props.link, 
            text: props.text, 
            component: props.component
         }
    }
    render() { 
        return ( 
            <Link className="nav-link" to={this.state.link}>
                {this.state.text}
            </Link>
         );
    }
}
 
export default NavItem;