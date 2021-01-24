import React, { useState, useEffect } from 'react';

import axios from 'axios';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/countries')
      .then(response => {
        console.log('retrived countries');
        setCountries(response.data);
      })
  }, []);

  console.log(countries);

  return (
    <div>
    </div>
  );
}

export default App;
