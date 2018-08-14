import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import SiteHeader from '/imports/ui/header/header.jsx';
import { RenderRoutes } from '/imports/startup/client/router.js';
import createBrowserHistory from 'history/createBrowserHistory';
import { Router, Route, Switch, hashHistory} from 'react-router';
import Overview from '/imports/ui/overview/overview.jsx';

Meteor.startup(() => {
  const browserHistory = createBrowserHistory();
  render(
    (
      <Router history={browserHistory}>
      <div>
      <SiteHeader/>
      <div style={{ padding: '0 5em', marginTop: '10em' }}>
      <Route exact path="/" component={Overview}/>
      <Route path="/cluster" component={TopicClusterContainer}/>
      </div>
      </div>
      </Router>
    ),
    document.getElementById('app'));
});
