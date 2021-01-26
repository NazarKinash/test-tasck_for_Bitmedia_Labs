import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import MaimPage from "./containers/MainPage/MaimPage";
import UserListPage from "./containers/UserListPage/UserListPage";
import UserPage from "./containers/UserPsge/UserPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={MaimPage} />
        <Route exact path="/users" component={UserListPage} />
        <Route path="/users/:id" component={UserPage} />
      </Switch>
    </div>
  );
}

export default App;
