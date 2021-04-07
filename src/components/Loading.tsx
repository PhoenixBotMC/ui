import { Component } from "react";
import { Spinner } from "react-bootstrap";

export interface ILoadingProps {}

export interface ILoadingState {}

class Loading extends Component<ILoadingProps, ILoadingState> {
  constructor(props: ILoadingProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Spinner animation="grow" variant="light" />
      </div>
    );
  }
}

export default Loading;
