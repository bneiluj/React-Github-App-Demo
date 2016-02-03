import React from 'react';
import Repos from './Github/Repos';
import UserProfile from './Github/UserProfile';
import Notes from './Notes/Notes';
import getGithubInfo from '../utils/helpers';
import Rebase from 're-base';

// Rebase
const base = Rebase.createClass('https://reactstagedemo.firebaseio.com/');

class Profile extends React.Component {
    // based on es6 with super
    constructor (props) {
        // use super to be able to use this
        super(props);
        this.state = {
            notes: [],
            bio: {},
            repos: []
        }
    }
    componentDidMount () {
      this.init(this.props.params.username);
    }
    // When we search for a new user
    // we don't want to refresh the page but just change the props
    componentWillReceiveProps (nextProps) {
      // remove binding when the username chaing
      base.removeBinding(this.ref);
      // when we receive new notes we are going to unbind the notes
      this.init(nextProps.params.username);
    }
    componentWillUmount () {
        base.removeBinding(this.ref);
    }
    // We want to setup a listenner when new props arrive = new username
    init (username) {
        // I want to bind to the username in firebase, the context and how to get
        // the data back and which state object = notes
        this.ref = base.bindToState(username, {
            context: this,
            asArray: true,
            state: 'notes'
        });

        // Get user info when component is mounts
        getGithubInfo(username)
            .then(function (data) {
                this.setState({
                    bio: data.bio,
                    repos: data.repos
                })
            }.bind(this))
    }
    // We need to get this handleAddNote down to the controller
    handleAddNote (newNote) {
        // the endpoint we want to post to
        base.post(this.props.params.username, {
            // we create a brand new array but adding the note
            data: this.state.notes.concat([newNote])
        })
    }
    render () {
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
                addNote={(newNote) => this.handleAddNote(newNote)} />
            </div>
          </div>
        )
    }
}
// exports
export default Profile;
