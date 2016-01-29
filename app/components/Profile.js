var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactFire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
    mixins: [ReactFireMixin],
    getInitialState: function () {
      return {
        notes: [1,2,3],
        bio: {},
        repos: ['a','b','c']
      }
    },
    componentDidMount: function () {
      this.ref = new Firebase('https://reactstagedemo.firebaseio.com/');
      console.log("this.ref: ", this.ref);
      var childRef = this.ref.child(this.props.params.username)
      // Receive new data and push it to our state 'notes'
      this.bindAsArray(childRef, 'notes');

      // Get user info when component is mounts
      helpers.getGithubInfo(this.props.params.username)
          .then(function (data) {
              this.setState({
                  bio: data.bio,
                  repos: data.repos
              })
          }.bind(this))
    },
    componentWillUmount: function () {
      this.unbind('notes');
    },
    // We need to get this handleAddNote down to the controller
    handleAddNote: function (newNote) {
      // Update firebase
      // I use set instead of push because push create a new key !
      // Child means whatever username we are on ie: this.props.params.username
      // and then /the number of notes and set a new one
      this.ref.child(this.props.params.username)
          .child(this.state.notes.length)
          // Set replace the data above - if it doesn't exist then it creates it
          .set(newNote);
    },
    render: function () {
        console.log("this.props: ", this.props);
        return (
          <div className="row">
            <div className="col-md-4">
              <UserProfile
                username={this.props.params.username}
                bio={this.state.bio} />
            </div>
            <div className="col-md-4">
              <Repos
                username={this.props.params.username}
                repos={this.state.repos} />
            </div>
            <div className="col-md-4">
              <Notes
                username={this.props.params.username}
                notes={this.state.notes}
                addNote={this.handleAddNote} />
            </div>
          </div>
        )
    }
});

// exports
module.exports = Profile;
