import React, { Component } from "react";
import DateDisplay from "./DateDisplay";
import { Route } from "react-router-dom";
import Main from "../main/main";
import Bot from "../bot/bot";
import GuildPanel from "../guildpanel/GuildPanel";
import GuildsPage from "../guilds/GuildsPage";
import GuildPremiumPanel from "../guildpanel/GuildPremiumPanel";
import UserDashboardPage from "../UserDashboard/UserDashboardPage";

class ContentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container p-3 mt-4 rounded bg-dark text-white'>
        <Route exact path='/' component={Main} />
        <Route path='/user' component={UserDashboardPage} />
        <Route path='/bot/:serverID?' component={Bot} />
        <Route path='/dashboard/:serverID?' component={GuildPanel} />
        <Route path='/premiumdashboard/:serverID?' component={GuildPremiumPanel} />
        <Route path='/selectguild/:redirect?' component={GuildsPage} />
        <DateDisplay />
      </div>
    );
  }
}

export default ContentPane;
