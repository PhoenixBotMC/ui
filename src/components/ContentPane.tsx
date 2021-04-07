import React, { Component } from "react";
import DateDisplay from "./DateDisplay";
import { Route } from "react-router-dom";
import Main from "../main/main";
import Bot from "../bot/bot";
import GuildPanel from "../guildpanel/GuildPanel";
import GuildsPage from "../guilds/GuildsPage";

class ContentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // TODO: Bot and Dashboard will redirect to GuildsPage if no serverID is provided

    return (
      <div className="container p-3 mt-4 rounded bg-dark text-white">
        <Route exact path="/" component={Main} />
        <Route path="/Bot/:serverID?" component={Bot} />
        <Route path="/dashboard/:serverID?" component={GuildPanel} />
        <Route path="/SelectGuild/:redirect?" component={GuildsPage} />
        <DateDisplay />
      </div>
    );
  }
}

export default ContentPane;
