import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [id, setId] = useState("")
 // const [character, setCharacter] = useState("");/*lo utlimo agregado */

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className='searchBar'>
        <input
        type="search"
        onChange={handleChange} 
        className="input"
        placeholder='826 Characters' 
        />

  <button className='searchButton' onClick={() => {
          onSearch(id);
        }}>Add</button>
        
        
    </div>
  );
}
export default SearchBar;

//BUTTON ORIGINAL
//<button className='searchButton' onClick={() => onSearch(id)}>
//Add</button>


// function SearchBar({ onSearch }) {
//   const [id, setId] = useState("");
//    const handleChange = (event) => {
//       setId(event.target.value);
//    };
 
//    return (
//      <div className='searchBar'>
//        <input onChange={handleChange}>
//          <input className="input" type="text" placeholder="search character..." name="query" />
//          <button className="button" onClick={() => onSearch(id)}>Add</button>
//        </input>
//      </div>
//    );
//  }
 


