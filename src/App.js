import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/Home/home";
import Header from "./components/header/header";

import Single from "./components/pages/Single/single";
import Settings from "./components/pages/settings/settings";
import Login from "./components/pages/Login/login";
import Register from "./components/pages/register/register";
import QuillApp from "./components/pages/Quill/quillApp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <div className="App">
        {" "}
        <TopBar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/header">
            <Header />
          </Route>

          <Route path="/single">
            <Single />
          </Route>

          <Route path="/settings">{user ? <Settings /> : <Login />}</Route>

          <Route path="/login">{user ? <Home /> : <Login />}</Route>

          <Route path="/register">{user ? <Home /> : <Register />}</Route>

          <Route path="/write">{user ? <QuillApp /> : <Login />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
