import * as React from "react";
import { Component } from "react";

export interface IGuildProps {
  name: string;
  icon: string;
  id: string;
  redirectPage: string;
}

export interface IGuildState {}

class Guild extends Component<IGuildProps, IGuildState> {
  constructor(props: IGuildProps) {
    super(props);
    this.state = {};
  }

  click() {
    window.location.href = `/${this.props.redirectPage}/${this.props.id}`;
  }

  render() {
    return (
      <div className="justify-content-center">
        <div className="w-75 m-auto">
          <div className="btn btn-dark w-100 pt-2 pb-2 d-flex align-items-center">
            <div className="mr-auto">
              <img
                src={`https://cdn.discordapp.com/icons/${this.props.id}/${this.props.icon}.png`}
                alt="Avatar"
                className="rounded-circle w-25 mr-2"
              />
              <div className="d-inline">{this.props.name}</div>
            </div>
            <button className="d-flex btn btn-success justify-content-end ml-auto" onClick={this.click.bind(this)}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Guild;
