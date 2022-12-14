import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import SignUp from "routes/SignUp";
import Navigation from "./Navigation";

const AppRouter = ({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Switch>
                {isLoggedIn ? (
                    <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    </> 
                ) : (
                    <>
                        <Route exact path="/">
                            <Auth />
                        </Route>
                        <Route exact path="/Profile">
                            <Profile />
                        </Route>
                        <Route exact path="/SignUp">
                            <SignUp />
                        </Route>

                    </>
                )}
            </Switch>
        </Router>
    );
};

export default AppRouter;