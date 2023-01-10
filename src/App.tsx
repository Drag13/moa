import "./App.css";
import { AppRouterProvider } from "./AppRouter";
import { IndexedDb } from "./IndexedDb";

function App() {
  return (
    <IndexedDb loader={<>loading</>}>
      <AppRouterProvider />
    </IndexedDb>
  );
}

export default App;
