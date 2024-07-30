import React, { useState } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

const Note = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    
  };

  return (
    <div>
      <h1>Notes</h1>
      <NoteForm addNote={addNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default Note;