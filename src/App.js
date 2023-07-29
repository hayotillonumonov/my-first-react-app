import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('Hayotillo')
  const [lang, setlang] = useState('My name is')

  const handleClick = ()=>{
    setName('Doniyor')
  }

  const handleClicklang = ()=>{
    setlang('Mening ismim')
  }
  return (
    <div className="App">
     <h1>{lang}: {name}</h1>
     <button onClick={handleClick}>Change name</button>
     <button onClick={handleClicklang}>Change language</button>
    </div>
  );
}

export default App;
