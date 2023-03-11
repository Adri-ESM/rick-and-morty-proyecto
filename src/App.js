import React, {useState} from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import { Form } from 'react-router-dom'


function App () {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "facab4118f48.6c103da1e2ca2ff12d51";

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`) //en key va key y la key debajo de la URL_Base
    .then((response) => response.json())
    .then((data) => {
      if (data.name && !characters.find((char) => char.id === data.id)){
      setCharacters((oldChars) => [...oldChars, data]);
    } else{
      return alert("You already added this card")
    }
  });
  };
  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id))
  };

  return (
    <div className="App" style={{ padding: "25px" }}>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route exact path='/' element={Form} />
        <Route 
        path='/home' 
        element={< Cards onClose={onClose} characters={characters}/>}
        />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />}/>
      </Routes>
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
    
  
  
  