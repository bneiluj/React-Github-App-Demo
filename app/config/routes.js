import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile';
import { Route , IndexRoute } from 'react-router';
//same as Router.IndexRoute

// Export
export default (
  <Route path="/" component={Main}>
    <Route path="profile/:username" component={Profile}/>
    <IndexRoute component={Home}/>
  </Route>
);
