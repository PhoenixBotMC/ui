import * as React from "react";
import { Component } from "react";
import { History } from "history";
import Utils from "../../../utils/utils";

export interface IGuildProps {
  name: string;
  icon: string;
  id: string;
  redirectPage: string;
  history: History;
}

export interface IGuildState {}

class Guild extends Component<IGuildProps, IGuildState> {
  constructor(props: IGuildProps) {
    super(props);
    this.state = {};
  }

  click() {
    this.props.history.push(`/${this.props.redirectPage}/${this.props.id}`);
  }

  render() {
    return (
      <div className='justify-content-center'>
        <div className='w-75 m-auto'>
          <div className='btn btn-dark w-100 pt-2 pb-2 d-flex align-items-center'>
            <div className='mr-auto'>
              {this.props.icon ? (
                <img
                  src={`https://cdn.discordapp.com/icons/${this.props.id}/${this.props.icon}.webp?size=128`}
                  alt='Guild'
                  className='rounded-circle mr-2'
                  style={{
                    width: "60px",
                  }}
                />
              ) : (
                <div
                  className='rounded-circle mr-2 border border-white d-inline-flex font-weight-bold align-middle align-items-center justify-content-center'
                  style={{
                    width: "60px",
                    height: "60px",
                  }}
                >
                  {Utils.parseServerLetters(this.props.name)}
                </div>
              )}
              <span className='d-inline-block'>{this.props.name}</span>
            </div>
            <button className='d-flex btn btn-success justify-content-end ml-auto' onClick={this.click.bind(this)}>
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Guild;
