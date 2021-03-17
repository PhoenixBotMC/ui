import React, { Component } from 'react';

class DateDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            date: 0
         }

    }

    handleData(data) {
        this.setState({ 
            date: data.data
         }); 
    }

    onSocketClose() {
        this.setState({
            date: "No longer connected"
        })
    }

    componentDidMount() {
        this.Websocket = new WebSocket('ws://localhost:4000/live/time'); 
        this.Websocket.onmessage = this.handleData.bind(this); 
        this.Websocket.onclose = this.onSocketClose.bind(this); 
    }

    render() { 
        return ( 
            <div>
                <p>
                    {
                        this.state.date
                    }
                </p>
            </div>
         );
    }
}
 
export default DateDisplay;