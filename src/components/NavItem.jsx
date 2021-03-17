import React, { Component } from 'react';

class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            link: props.link, 
            text: props.text
         }
    }
    render() { 
        return ( 
            <a className="nav-link" href={this.state.link}>
                {this.state.text}
            </a>
         );
    }
}
 
export default NavItem;