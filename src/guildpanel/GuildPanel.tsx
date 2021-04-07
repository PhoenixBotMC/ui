import * as React from "react";
import { Component } from "react";
import ServerPage from "../components/ServerPage";

export interface IGuildPanelProps {
  match: {
    params: {
      serverID: string;
    };
  };
}

export interface IGuildPanelState {}

class GuildPanel extends ServerPage {
  constructor(props: IGuildPanelProps) {
    super(props, "dashboard");
    this.state = {};
  }
  render() {
    const {
      match: { params },
    } = this.props;
    return <div>{params.serverID ? `Detected Server: ${params.serverID}` : "No server detected. "}</div>;
  }
}

export default GuildPanel;
