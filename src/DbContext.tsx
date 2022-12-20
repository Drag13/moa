import { PureComponent } from "react";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./AppRouter";
import { ensureCreated } from "./data/db";

export class DbContext extends PureComponent {
  state = { dbReady: false };

  render() {
    const { dbReady } = this.state;

    return (
      <>
        {dbReady ? (
          <RouterProvider router={AppRouter()}></RouterProvider>
        ) : null}
      </>
    );
  }

  componentDidMount() {
    ensureCreated().then(() => this.setState({ dbReady: true }));
  }
}
