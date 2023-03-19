import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [id, setId] = useState("")


  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className='searchBar'>
        <input
        type="search"
        onChange={handleChange} 
        placeholder='826 Characters' 
        className="search-input"
        />

  <button className='searchButton' onClick={() => {
          onSearch(id);
        }}>Add</button>
        
        
    </div>
  );
}
export default SearchBar;
