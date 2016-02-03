import React from 'react';

class NotesList extends React.Component {
    render(){
        // Destructuring variables
        // Saving into a variable called notes
        const { notes } = this.props;
        return (
            <ul className="list-group">
              {notes.map((note, index)  => (
                <li className="list-group-item" key={index}>{note}</li>
              ))}
            </ul>
        )
    }
}

export default NotesList;
