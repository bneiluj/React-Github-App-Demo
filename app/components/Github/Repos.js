var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
          <div>
            <p>REPOS</p>
            Repos: {this.props.repos}
          </div>
        )
    }
})

// exports
module.exports = Repos;
