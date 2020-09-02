import React from "react";
import NavBar from "./components/Navbar.jsx";
import Feeds from "./components/Feeds.jsx";
import NewPost from "./components/NewPost.jsx";
import SignIn from "./components/SignIn.jsx";
import disPost from "./components/Post.jsx";
import yourStories from "./components/yourStoriesList.jsx"
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import { AuthProvider } from './Auth'
import PrivateRoute from './PrivateRoute';

function App() {
  
  return (
    <AuthProvider>
    <Router>
        <NavBar />
    
        <Route path="/" exact component={Feeds} />
        <Route path="/post/:id" component = {disPost} /> 
        <PrivateRoute path="/addPost" exact  component={NewPost} />
        <Route path="/signIn" exact component={SignIn} />
        <PrivateRoute path="/yourStories" exact component={ yourStories } />
        
    </Router>
    </AuthProvider>
  );
}

export default App;
