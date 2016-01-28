var React = require('react');

var AddNote = React.createClass({
  propTypes: {
      username: React.PropTypes.string.isRequired,
      addNote: React.PropTypes.func.isRequired
  },
  setRef: function (ref) {
    this.note = ref;
  },
  handleSubmit: function () {
    var newNote = this.note.value;
    this.note.value = '';
    this.props.addNote(newNote);
  },
  render: function () {
      return (
          <div>
              <input
                  type='text'
                  className='form-control'
                  placeholder='Add New Note'
                  // let's call that function setRef
                  ref={this.setRef} />
              <span className='input-group-button'>
                  <button
                      className='btn btn-default'
                      type='button'
                      onClick={this.handleSubmit}></button>
              </span>
          </div>
      )
  }
});
// Exports
module.exports = AddNote;
