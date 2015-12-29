var React = require('react');
// var NotesList = require('./NotesList');

var Notes = React.createClass({
    render: function () {
        console.log('Notes: ', this.props.notes);
        return (
          <div>
            <h3>Notes for {this.props.username}</h3>
          </div>
        )
    }
})

// Exports
module.exports = Notes;
