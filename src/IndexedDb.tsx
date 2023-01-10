import { PropsWithChildren, PureComponent, ReactNode } from "react";
import { ensureCreated } from "./data/db";

export class IndexedDb extends PureComponent<
  PropsWithChildren<{ loader: ReactNode }>
> {
  state = { dbReady: false };

  render() {
    const { dbReady } = this.state;
    const { children, loader } = this.props;

    return <>{dbReady ? children : loader}</>;
  }

  componentDidMount() {
    ensureCreated().then(() => this.setState({ dbReady: true }));
  }
}
