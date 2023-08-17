import React, { useState } from 'react';
import './App.css';
import Name from './components/Name';
import RPS from './components/RPS'


function App() {
  const [isDataPresent, setIsDataPresent] = useState(false);

  const handleDataExistence = (exists) => {
      setIsDataPresent(exists)
  };

  return (
    <div className="App">
      <Name onDataExistenceChange={handleDataExistence}/>
      {isDataPresent && <RPS />}
    </div>
  );
}

export default App;
