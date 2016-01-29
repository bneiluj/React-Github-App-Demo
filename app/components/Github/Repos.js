var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function () {
        console.log('REPOS this.props inside Repos.js: ', this.props.repos);
        return (
          <div>
            <p>REPOS</p>
          </div>
        )
    }
})

// exports
module.exports = Repos;
