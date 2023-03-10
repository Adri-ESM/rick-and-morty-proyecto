import React, {useState} from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'


function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    

    fetch(`${URL_BASE}/character/${id}?key=${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)){
      setCharacters((oldChars) => [...oldChars, data]);
    } else{
      alert("Ya agregaste esta Card")
    }
  });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
  

  // const newCharacters = [
    //   {
    //     name: 'Morty Smith',
    //     species: 'Human',
    //     gender: 'Male',
    //     image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    //   }
    // ];

    // setCharacters(newCharacters);


  // const [characters, setCharacters] = useState([]);
  // const onSearch = (id) => {
    
  
  
  