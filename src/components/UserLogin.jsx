import React, { Component } from 'react';
import Button from './Button'; 
import Avatar from './Avatar'; 

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            items: props.items, 
            isLoggedIn: false, 
            User: {}, 
            Link: ""
        }
    }

    async componentDidMount() {
        // make api request and set logged in
        
        const isValidSession = await this.checkValidSession(); 

        let isLoggedIn = false; 

        isLoggedIn = isValidSession; 

        const userData = await this.getUserData(); 

        if (isLoggedIn && userData.status) {
            this.setState({
                items: this.state.items, 
                isLoggedIn: isLoggedIn, 
                User: userData.user, 
                Link: this.state.Link
            }); 
            return; 
        }

        this.setState({
            items: this.state.items, 
            isLoggedIn: false, 
            User: this.state.User, 
            Link: this.state.Link
        }); 

        await this.setLink();
    }

    async getUserData() {
        const userData = await fetch(`http://${process.env.REACT_APP_SERVER}/api/discord/user`, {
            credentials: 'include'
        }); 

        if (userData.status !== 200) {
            return {
                status: false
            }
        } else {
            return {
                status: true, 
                user: await userData.json()
            }
        }
    }

    async checkValidSession() {
        const e = await fetch(`http://${process.env.REACT_APP_SERVER}/api/oauth/isValidSession`, {
            credentials: 'include'
        }); 
        const response = await e.json(); 
        return response; 
    }

    async setLink() {
        let link  = ""; 
        const linkReq = await fetch(`http://${process.env.REACT_APP_SERVER}/api/oauth/getlink?redirect_uri=http://localhost:3000&scope=identify%20guilds`, {
            credentials: 'include'
        }); 

        link = await linkReq.text(); 

        this.setState({
            items: this.state.items, 
            isLoggedIn: this.state.isLoggedIn, 
            User: this.state.User, 
            Link: link
        }); 
    }

    redirect() {
        window.location.href = this.state.Link; 
    }

    render() {
        return ( 
                <div className="float-right">
                    {
                    this.state.isLoggedIn ? <Avatar link={`https://cdn.discordapp.com/avatars/${this.state.User.id}/${this.state.User.avatar}.png`} name={this.state.User.username} /> : 
                    <Button onClick={this.redirect.bind(this)}>
                        Login
                    </Button>
                    }
                </div>
         );
    }
}
 
export default UserLogin;