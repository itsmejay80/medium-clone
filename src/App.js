import React from "react";
import NavBar from "./components/Navbar.jsx";
import Feeds from "./components/Feeds.jsx";
import NewPost from "./components/NewPost.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SingIn.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route path="/" exact component={Feeds} />
        <Route path="/addPost" component={NewPost} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
      </React.Fragment>
    </Router>
  );
}

export default App;
