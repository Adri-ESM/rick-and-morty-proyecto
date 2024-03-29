import React from 'react';
import {useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Navbar from './components/Navbar';
import { Routes, Route, useNavigate } from 'react-router-dom';
import About from './components/About';
import { Form } from './components/Form';
import Favorites from './components/Favorite/Favorites';
import { Footer } from './components/Footer';


function App () {
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const [showNav] = useState(true);
  

  function login(userData){
    const username = userData.username;
    const password = userData.password;
    if(username !== '' && password !== ''){
      if(userData.username === username && userData.password === password){
        setAccess(true);
        //alert('hola')
        navigate('/home');
      }
    } 
  }

  function logout(){
    setAccess(false);
    navigate("/");
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access, navigate]);

  const onSearch = (id) => {
    // const URL_BASE = `http://localhost:3001/rickandmorty/onsearch/`; //coocar aqui onserach la nueva app
    const URL_BASE = 'http://localhost:3001'; 
    //const KEY = "facab4118f48.6c103da1e2ca2ff12d51";

    fetch(`${URL_BASE}/onSearch/${id}`) //en key va key y la key debajo de la URL_Base
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
        {showNav && <Navbar onSearch={onSearch} logout={logout}/>}
        <Routes>
          <Route exact path='/' element={<Form login={login} />} />
          <Route path='/home' element={<Cards onClose={onClose} characters={characters}/>}/>
          <Route path='/about' element={<About />} />
          <Route path='/favorites' element={<Favorites />} />
          
        </Routes>
        <div>
          <Footer />
        </div>
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
    
  
  
  // <Route path='/detail/:detailId' element={<Detail setShowNav={setShowNav}/>}/>


  //RUTA ANTERIOR
  //http://localhost:3001/rickandmorty/onsearch/