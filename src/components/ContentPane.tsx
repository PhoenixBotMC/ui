import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../pages/main/main";
import Bot from "../pages/bot/bot";
import GuildPanel from "../pages/guildpanel/GuildPanel";
import GuildPremiumPanel from "../pages/guildpanel/GuildPremiumPanel";
import UserDashboardPage from "../pages/UserDashboard/UserDashboardPage";
import GuildSelectPage from "../pages/guildselect/GuildSelectionPage";
import NotFound from "../pages/NotFound/NotFound";
import PremiumPage from "../pages/premium/PremiumPage";

class ContentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='container p-3 mt-4 rounded bg-dark text-white mb-4'>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/user' component={UserDashboardPage} />
          <Route path='/bot/:serverID?' component={Bot} />
          <Route path='/dashboard/:serverID?' component={GuildPanel} />
          <Route path='/premiumdashboard/:serverID?' component={GuildPremiumPanel} />
          <Route path='/selectguild/:redirect?' component={GuildSelectPage} />
          <Route path='/premium' component={PremiumPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default ContentPane;
