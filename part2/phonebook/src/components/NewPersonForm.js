import React from 'react';

const NewPersonForm = ({
	newName,
	handleNameChange,
	newNumber,
	handleNumberChange,
	handleNewSubmit
}) => (
		<form onSubmit={handleNewSubmit}>
			<div>
				name: <input
					value={newName}
					onChange={(e) => handleNameChange(e.target.value)}
				/>
			</div>
			<div>
				number: <input
					value={newNumber}
					onChange={(e) => handleNumberChange(e.target.value)}
				/>
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);

export default NewPersonForm;
