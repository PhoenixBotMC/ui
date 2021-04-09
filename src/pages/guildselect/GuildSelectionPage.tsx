import { Component } from "react";
import AxiosTransport from "../../AxiosTransport";
import Loading from "../../components/Loading";
import Guild from "./components/Guild";
import { History } from "history";

type PartialGuild = {
  id: string;
  name: string;
  icon: string;
  owner: boolean;
  permissions: string;
  features: [string];
  isBotInGuild: boolean;
};

export interface IGuildsPageProps {
  match: {
    params: {
      redirect: string;
    };
  };
  history: History;
}

export interface IGuildsPageState {
  requestMade: boolean;
  requestSuccessful: boolean;
  request: Array<PartialGuild>;
}

class GuildSelectPage extends Component<IGuildsPageProps, IGuildsPageState> {
  constructor(props: IGuildsPageProps) {
    super(props);
    this.state = {
      requestMade: false,
      requestSuccessful: true,
      request: [],
    };
  }

  createGuilds() {
    let guilds = [];
    const {
      match: { params },
    } = this.props;
    this.state.request.forEach((g) => {
      // if (g.isBotInGuild)

      guilds.push(<Guild {...g} redirectPage={params.redirect || "dashboard"} {...this.props} />);
    });
    return guilds;
  }

  async componentDidMount() {
    await this.request();
  }

  async request() {
    let data;
    try {
      data = await AxiosTransport.get(`http://${process.env.REACT_APP_SERVER}/api/discord/guilds`);
    } catch (err) {
      // PROBABLY not logged in :/
      this.setState({
        requestMade: true,
        requestSuccessful: false,
      });
      return;
    }

    this.setState({ requestMade: true, request: data.data });
  }

  render() {
    return (
      <div>
        {this.state.requestMade ? (
          this.state.requestSuccessful ? (
            this.state.request.length > 0 ? (
              this.createGuilds()
            ) : (
              "No servers found. "
            )
          ) : (
            "Please log in to see servers. "
          )
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}

export default GuildSelectPage;
