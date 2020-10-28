import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Navbar from "./shared/layout/Navbar/Navbar";
import Homepage from "./home/Homepage";
import NewPost from "./editor/NewPost";
import Settings from "./settings/Settings";
import SignIn from "./auth/SignIn/SignIn";
import SignUp from "./auth/SignUp/SignUp";
import Article from "./article/Article";
import AuthorPage from "./profile/AuthorPage";
import Footer from "./shared/layout/Footer/Footer";
import TagFeed from "./home/TagFeed";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={SignIn} />
        <Route path="/register" component={SignUp} />
        <Route path="/settings" component={Settings} />
        <Route path="/editor" component={NewPost} />
        <Route path="/articles/:slug" component={Article} />
        <Route path="/user/:username" component={AuthorPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
