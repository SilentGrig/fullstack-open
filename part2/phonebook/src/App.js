import React, { useState } from 'react';
import Filter from './components/Filter';
import NewPersonForm from './components/NewPersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filterName, setFilterName] = useState('');

  const handleNewSubmit = (event) => {
    event.preventDefault();
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = { name: newName, number: newNumber }
    setNewName('');
    setNewNumber('');
    setPersons(persons.concat(newPerson));
  }

  const personsToDisplay = persons.filter((person) => {
    return !filterName
      || person.name.toLowerCase()
        .includes(filterName.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        filterName={filterName}
        handleChange={setFilterName}
      />
      <h3>Add a New</h3>
      <NewPersonForm
        newName={newName}
        handleNameChange={setNewName}
        newNumber={newNumber}
        handleNumberChange={setNewNumber}
        handleNewSubmit={handleNewSubmit}
      />
      <h3>Numbers</h3>
      <Persons personsToDisplay={personsToDisplay} />
    </div>
    )
  }
  
  export default App;
