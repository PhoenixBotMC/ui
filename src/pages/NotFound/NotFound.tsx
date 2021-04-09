import { Component } from "react";
import { Link } from "react-router-dom";

export interface INotFoundProps {}

export interface INotFoundState {}

class NotFound extends Component<INotFoundProps, INotFoundState> {
  constructor(props: INotFoundProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>404 Not Found</h1>
        <p>(wtf are you even doing here?)</p>
        <h2>Resources: </h2>
        <Link to='/'>Home Page</Link>
      </div>
    );
  }
}

export default NotFound;
