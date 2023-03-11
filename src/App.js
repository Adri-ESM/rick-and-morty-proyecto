import React, {useState, useEffect } from 'react'
import './App.css'
import Cards from './components/Cards.jsx'
import Navbar from './components/Navbar'
import { Routes, Route, useNavigate } from 'react-router-dom'
import About from './components/About'
import Detail from './components/Detail'
import { Form } from './components/Form.jsx'


function App () {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = 'anggivmorales@gmail.com';
  const password = '123456';

  

  function login(userData){
    if(userData.username === username && userData.password === password){
      setAccess(true);
      alert('hola')
      navigate('/about');
    }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

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
        <Navbar onSearch={onSearch} />
        <Routes>
          <Route exact path='/' element={<Form login={login} />} />
          <Route path='/home' element={< Cards onClose={onClose} characters={characters}/>}/>
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
    
  
  
  