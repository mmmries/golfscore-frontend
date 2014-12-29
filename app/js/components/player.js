/** @jsx React.DOM **/
var React = require('react');
var Trophy = require('./trophy');
var xhr = require('xhr');

var Player = React.createClass({
  getInitialState() {
    return {
      id: null,
      name: null,
      points: null,
      records: [],
    };
  },
  componentWillMount() {
    var that = this;
    xhr({
      uri: "/players/"+this.props.params.id+".json"
    }, function(err, res, body) {
      that.setState( JSON.parse(body) );
    });
  },

  render() {
    return (
      <div className="container-vertical">
        <div className="player">
          <h1>Player {this.state.name}</h1>
          <h3>Cumulative Score: {this.state.points}</h3>
        </div>
        <div className="trophies">
          <div className="container">
            {this.renderTrophies()}
          </div>
        </div>
      </div>
    );
  },
  renderTrophies() {
    return this.state.records.map(function(rec){
      return <Trophy key={rec.id} record={rec} />;
    });
  }
});

module.exports = Player;
