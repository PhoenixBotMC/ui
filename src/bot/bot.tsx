import ServerPage from "../components/ServerPage";
import BotStatus from "./BotStatus";

class Bot extends ServerPage {
  constructor(props) {
    super(props, "Bot");
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
