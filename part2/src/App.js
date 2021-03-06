import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/Note';

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState('');
	const [showAll, setShowAll] = useState(true);

	useEffect(() => {
		console.log('effect');
		axios
			.get('http://localhost:3001/notes')
			.then(response => {
				console.log('promise fulfulled');
				setNotes(response.data);
			})
	}, []);

	const addNote = (event) => {
		event.preventDefault();
		const newNoteObject = {
			id: notes.length + 1,
			content: newNote,
			date: new Date().toISOString(),
			important: Math.random() > 0.5
		};
		setNewNote('');
		setNotes(notes.concat(newNoteObject));
	}

	const handleNoteChange = (event) => setNewNote(event.target.value);

	const notesToShow = showAll
		? notes
		: notes.filter(note => note.important);

	const rows = () => notesToShow.map(note =>
		<Note
			key={note.id}
			note={note}
		/>
	);

	return (
		<div>
			<h1>Notes</h1>
			<button onClick={() => setShowAll(!showAll)}>
				show {showAll ? 'important' : 'all'}
			</button>
			<ul>
				{rows()}
			</ul>
			<form onSubmit={addNote}>
				<input
					value={newNote}
					onChange={handleNoteChange}
				/>
				<button type="submit">save</button>
			</form>
		</div>
	);
}

export default App;
