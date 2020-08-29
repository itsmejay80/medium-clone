import React from "react";
import NavBar from "./components/Navbar.jsx";
import Feeds from "./components/Feeds.jsx";
import NewPost from "./components/NewPost.jsx";
import SignUp from "./components/SignUp.jsx";
import SignIn from "./components/SingIn.jsx";
import disPost from "./components/Post.jsx";
import yourStories from "./components/yourStoriesList.jsx"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { AuthProvider } from './Auth'


function App() {
  
  return (
    <AuthProvider>
    <Router>
        <NavBar />
        <div>
        <Switch>
        <Route path="/" exact component={Feeds} />
        <Route path="/post/:id" component = {disPost} /> 
        <Route path="/addPost" component={NewPost} />
        <Route path="/signUp" component={SignUp} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/yourStories" component={ yourStories } />
        </Switch>
        </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
