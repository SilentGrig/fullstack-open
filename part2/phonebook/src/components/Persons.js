import React from 'react';

const Persons = ({ personsToDisplay }) =>
	personsToDisplay.map(person =>
		<div
			key={person.name}>
			{person.name} {person.number}
		</div>
	);

export default Persons;
