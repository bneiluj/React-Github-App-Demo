var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');

var Profile = React.createClass({
    getInitialState: function () {
      return {
        notes: [],
        bio: {
          name: 'Julien Bouteloup'
        },
        repos: []
      }
    },
    render: function () {
        return (
          <div className="row">
            <div className="col-md-4">
              <UserProfile
                username={this.props.params.username}
                bio={this.state.bio}/>
              User Profile Component --> {this.props.params.username}
            </div>
            <div className="col-md-4">
              <Repos
                repos={this.state.repos}/>
              Repos Component
            </div>
            <div className="col-md-4">
              <Notes
                notes={this.state.notes}/>
              Notes Component
            </div>
          </div>
        )
    }
});

// exports
module.exports = Profile;
