import { Component } from "react";

export interface IUserDashboardPageProps {}

export interface IUserDashboardPageState {}

class UserDashboardPage extends Component<IUserDashboardPageProps, IUserDashboardPageState> {
  constructor(props: IUserDashboardPageProps) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>This is the Premium Page.</div>;
  }
}

export default UserDashboardPage;
