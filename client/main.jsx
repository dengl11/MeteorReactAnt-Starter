import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import SiteHeader from '../imports/ui/header/header.jsx';
 
import App from '../imports/ui/App.js';
 
Meteor.startup(() => {
  render(<SiteHeader />, document.getElementById('site-header'));
  render(<App />, document.getElementById('site-body'));
});
