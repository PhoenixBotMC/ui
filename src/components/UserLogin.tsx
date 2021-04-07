import React, { Component } from "react";
import Button from "./Button";
import Avatar from "./Avatar";
import AxiosTransport from "../AxiosTransport";
import NavBar from "./NavBar";

class UserLogin extends Component<{ parent: NavBar }, { User: { [key: string]: any }; Link: string }, {}> {
  constructor(props) {
    super(props);
    this.state = {
      User: {},
      Link: "",
    };
  }

  async componentDidMount() {
    // make api request and set logged in

    const isValidSession = await this.checkValidSession();

    let isLoggedIn = false;

    isLoggedIn = isValidSession;

    let userData;

    try {
      userData = await this.getUserData();
    } catch (err) {
      // user not logged in
      this.props.parent.setState({
        isLoggedIn: false,
      });

      await this.setLink();
      return;
    }

    if (isLoggedIn && userData.status) {
      this.props.parent.setState({
        isLoggedIn: isLoggedIn,
      });

      this.setState({
        User: userData.user,
      });
      return;
    }
  }

  async getUserData() {
    const userData = await AxiosTransport.get(`http://${process.env.REACT_APP_SERVER}/api/discord/user`);

    if (userData.status !== 200) {
      return {
        status: false,
      };
    } else {
      return {
        status: true,
        user: userData.data,
      };
    }
  }

  async checkValidSession() {
    const e = await AxiosTransport.get(`http://${process.env.REACT_APP_SERVER}/api/oauth/isValidSession`);
    const response = e.data;

    return response;
  }

  async setLink() {
    let link = "";
    const linkReq = await AxiosTransport.get(
      `http://${process.env.REACT_APP_SERVER}/api/oauth/getlink?redirect_uri=http://localhost:3000/SelectGuild&scope=identify%20guilds`
    );

    link = linkReq.data;

    this.setState({
      Link: link,
    });
  }

  redirect() {
    window.location.href = this.state.Link;
  }

  render() {
    return (
      <div className="float-right">
        {this.props.parent.state.isLoggedIn ? (
          <Avatar
            link={`https://cdn.discordapp.com/avatars/${this.state.User.id}/${this.state.User.avatar}.png`}
            name={this.state.User.username}
          />
        ) : (
          <Button onClick={this.redirect.bind(this)}>Login</Button>
        )}
      </div>
    );
  }
}

export default UserLogin;
