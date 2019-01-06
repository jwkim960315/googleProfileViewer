import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../styles.css";

import NavigationBar from "./NavigationBar";
import HomeTitle from "./HomeTitle";
import HomeContent from "./HomeContent";
import UserProfile from "./UserProfile";

const App = () => {
    return (
        <BrowserRouter>
      <div>
        <NavigationBar />
        <Route path="/" exact component={HomeTitle} />
        <Route path="/" exact component={HomeContent} />
        <Route path="/userProfile" exact component={UserProfile} />
      </div>
    </BrowserRouter>
    );
};

export default App;