import "./App.scss";
import Header from "./components/Header/Header";
// import UserData from "./components/UserData/UserData";
import MaimPage from "./containers/MainPage/MaimPage";
import UserListPage from "./containers/UserListPage/UserListPage";
import UserPage from "./containers/UserPsge/UserPage";

function App() {
  return (
    <div className="App">
      <Header />
      <MaimPage />
      <UserListPage />
      <UserPage />
    </div>
  );
}

export default App;
