import React from 'react';

class AddNote extends React.Component {
    handleSubmit () {
      var newNote = this.note.value;
      this.note.value = '';
      this.props.addNote(newNote);
    }
    setRef (ref) {
      this.note = ref;
    }
    // Array function doesn't create their own scope
    render () {
        return (
            <div>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Add New Note'
                    ref={(ref) => this.setRef(ref)} />
                <span className='input-group-button'>
                    <button
                        className='btn btn-default'
                        type='button'
                        onClick={() => this.handleSubmit()}>Submit</button>
                </span>
            </div>
        )
    }
}

AddNote.propTypes = {
    username: React.PropTypes.string.isRequired,
    addNote: React.PropTypes.func.isRequired
};

// Exports
export default AddNote;
