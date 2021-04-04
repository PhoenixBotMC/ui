import React, { Component } from "react";
import DateDisplay from "./DateDisplay";
import { Route } from "react-router-dom";
import Main from "../main/main";
import Bot from "../bot/bot";

class ContentPane extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container p-3 mt-4 rounded bg-dark text-white">
        <h1>Content Pane</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa sunt ea est architecto rerum ipsam modi labore
          nam id non assumenda eum odit repellendus ipsum alias dolore aut, atque ex!
        </p>
        <Route exact path="/" component={Main} />
        <Route path="/Bot" component={Bot} />
        <DateDisplay />
      </div>
    );
  }
}

export default ContentPane;
