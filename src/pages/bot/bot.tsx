import ServerPage, { IServerPageProps } from "../../components/ServerPage";
import BotStatus from "./BotStatus";

export interface IBotProps extends IServerPageProps {}

class Bot extends ServerPage {
  constructor(props: IBotProps) {
    super(props, "bot");
  }

  render() {
    const {
      match: { params },
    } = this.props;
    return (
      <div>
        <p>This is the bot page. </p>

        <h1> Bot Status </h1>
        <BotStatus GuildID={params.serverID} />
      </div>
    );
  }
}

export default Bot;
