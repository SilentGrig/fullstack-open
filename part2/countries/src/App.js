import React, { useState, useEffect } from 'react';

import axios from 'axios';

import Filter from './components/Filter';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filterName, setFilterName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/countries')
      .then(response => {
        console.log('retrived countries');
        setCountries(response.data);
      })
  }, []);

  console.log(countries);

  const countriesToDisplay = countries.filter((country) => {
    return !filterName
      || country.name.toLowerCase()
        .includes(filterName.toLowerCase());
  });

  const rows = () => {
    return countriesToDisplay.length > 10 ?
      'Too many matches, specify another filter' :
      countriesToDisplay.length === 1 ?
      <Country 
          country={countriesToDisplay[0]}
      /> :
      countriesToDisplay.map(country =>
        <div>{country.name}</div>
      );
  };

  return (
    <div>
      <Filter 
        filterName={filterName}
        handleChange={setFilterName}
      />
      {rows()}
    </div>
  );
}

export default App;
