/** @jsx React.DOM **/
var React = require('react');
var Router = require('react-router');

var App = require('./components/app');
var Home = require('./components/home');
var NotFound = require('./components/not_found');
var Player = require('./components/player');

React.render(
  <Router.Routes location="history">
    <Router.Route path="/" handler={App}>
      <Router.DefaultRoute handler={Home} />
      <Router.Route name="player" path="/players/:id" handler={Player} />
    </Router.Route>
    <Router.NotFoundRoute handler={NotFound}/>
  </Router.Routes>,
  document.body
);
