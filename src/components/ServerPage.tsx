import { Component } from "react";
import { History } from "history";

export interface IServerPageProps {
  match: {
    params: {
      serverID: string;
    };
  };
  history: History;
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

    if (!params.serverID) this.props.history.push(`/selectguild/${this.page}`);
  }

  render() {
    return <div></div>;
  }
}

export default ServerPage;
