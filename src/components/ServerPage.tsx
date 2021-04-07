import { Component } from "react";

export interface IServerPageProps {
  match: {
    params: {
      serverID: string;
    };
  };
}

export interface IServerPageState {}

class ServerPage extends Component<IServerPageProps, IServerPageState> {
  page: string;
  constructor(props: IServerPageProps, page: string) {
    super(props);
    this.page = page;
    this.state = {};
  }

  componentDidMount() {
    const {
      match: { params },
    } = this.props;

    if (!params.serverID) window.location.href = `/SelectGuild/${this.page}`;
  }

  render() {
    return <div></div>;
  }
}

export default ServerPage;
