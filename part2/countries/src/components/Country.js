import React from 'react';

const Country = ({ country }) => {
  const languages = () => country.languages.map(language => (
    <li>{language.nativeName}</li>
    ));
  return (
    <div>
      <h1>{country.name}</h1>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h2>languages</h2>
      <ul>
        {languages()}
      </ul>
      <img 
      src={country.flag} 
      alt={`${country.name}'s Flag`}
      width='150px'
      />
    </div>
  );
}

export default Country;
