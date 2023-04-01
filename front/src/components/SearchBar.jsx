import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [id, setId] = useState("")


  const handleChange = (event) => {
    setId(event.target.value);
  };



  return (
    <div className='searchBar'>
      <div className='search-i-b'>
        <input
        type="search"
        onChange={handleChange} 
        placeholder='Add Card to Home' 
        className="search-input"
        />

  <button className='searchButton' onClick={() => {
          onSearch(id);
        }}>Add</button>
        
        </div>
    </div>
  );
}
export default SearchBar;
