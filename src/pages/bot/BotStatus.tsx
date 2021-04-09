import React, { Component } from "react";
import WebSocketComponent from "../../components/WebSocketComponent";
import Utils from "../../utils/utils";
export interface IBotStatusProps {
  GuildID: string;
}

export interface IBotStatusState {
  alert: JSX.Element;
}

class BotStatus extends Component<IBotStatusProps, IBotStatusState> {
  constructor(props: IBotStatusProps) {
    super(props);
    this.state = {
      alert: <div></div>,
    };
  }

  handleData(data, component: WebSocketComponent) {
    const d = Utils.parseJson(data.data);

    if (d.status || d.status === false) {
      // stupid js falsy stuff
      component.setState({
        currentComponent: d.status ? (
          <span className='text-success font-weight-bold'>• Online</span>
        ) : (
          <span className='text-danger font-weight-bold'>• Offline</span>
        ),
      });
      this.setState({
        alert: <div></div>,
      });
    } else if (d.error) {
      this.setState({
        alert: <div className='alert alert-danger'>An error occurred: {d.error}</div>,
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.alert}
        <WebSocketComponent
          WebSocket={`ws://${process.env.REACT_APP_SERVER}/live/botstatus?guildID=${this.props.GuildID}`}
          handleData={this.handleData}
          ConnectingMessage={<span className='text-success font-weight-bold'>• Connecting...</span>}
          NotConnectedMessage={<span className='text-danger font-weight-bold'>• Not Connected</span>}
          Parent={this}
        />
      </div>
    );
  }
}

export default BotStatus;
