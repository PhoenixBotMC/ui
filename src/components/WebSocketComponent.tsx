import React, { Component } from "react";

export interface IWebSocketComponentState {
  currentComponent: JSX.Element;
}

export interface IWebSocketComponentProps {
  WebSocket: string;
  handleData?: Function;
  socketClose?: Function;
  NotConnectedMessage?: JSX.Element;
  ConnectingMessage?: JSX.Element;
  Parent: Component;
}

class WebSocketComponent extends Component<IWebSocketComponentProps, IWebSocketComponentState> {
  Websocket: WebSocket;
  constructor(props: IWebSocketComponentProps) {
    super(props);
    this.state = {
      currentComponent: this.props.ConnectingMessage || <div></div>,
    };
  }

  defaultHandleData(data, component) {
    component.setState({
      currentComponent: <span>{data.data}</span>,
    });
  }

  defaultSocketClose() {}

  componentDidMount() {
    this.Websocket = new WebSocket(this.props.WebSocket);
    this.Websocket.onmessage = (data) => {
      (this.props.handleData || this.defaultHandleData).bind(this.props.Parent, data, this)();
    };
    this.Websocket.onclose = () => {
      (this.props.socketClose || this.defaultSocketClose).bind(this.props.Parent, this)();
      if (this.props.NotConnectedMessage) this.setState({ currentComponent: this.props.NotConnectedMessage });
    };
  }

  render() {
    return <div>{this.state.currentComponent}</div>;
  }
}

export default WebSocketComponent;
