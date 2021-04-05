import React, { Component } from "react";
import BotStatus from "./BotStatus";

class Bot extends Component {
  render() {
    return (
      <div>
        <p>This is the bot page. </p>

        <h1> Bot Status </h1>
        <BotStatus GuildID="812467707135000606" />
      </div>
    );
  }
}

export default Bot;
