import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Overview from '/imports/ui/overview/overview.jsx'
import TopicClusterContainer from '/imports/ui/topic_cluster/topic_cluster_container.jsx'


const browserHistory = createBrowserHistory();

export const RenderRoutes = () => (
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Overview}/>
        <Route exact path="/cluster" component={TopicClusterContainer}/>
      </Switch>
    </Router>
  );
