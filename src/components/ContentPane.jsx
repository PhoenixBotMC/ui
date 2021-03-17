import React, { Component } from 'react';

class ContentPane extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return ( 
            <div className="container p-3 mt-4 rounded bg-dark text-white">
                {
                    // i still have no idea how were gonna render this
                }
                <h1>Content Pane</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sunt ea est architecto rerum ipsam modi labore nam id non assumenda eum odit repellendus ipsum alias dolore aut, atque ex!</p>
            </div>
         );
    }
}
 
export default ContentPane;