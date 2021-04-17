import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import TestOne from '../Template/Content/TestOne';
import TestTwo from '../Template/Content/TestTwo';
import NavBar from '../Template/Layout/NavBar';

export default function AppRoute() {
    return (
        <Router>
        <NavBar />
        <Switch>
          <Route path="/test-one" exact component={TestOne} />
          <Route path="/test-two"  component={TestTwo} />
        </Switch>
        </Router>
    )
}
