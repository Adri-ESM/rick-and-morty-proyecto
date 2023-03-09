import React, { useState } from 'react';


function SearchBar({ onSearch }) {
  const [id, setId] = useState("")

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className='searchBar'>
        <form 
        type="search"
        onChange={handleChange} 
        className="input"
        />
        <button className='searchButton' onClick={() => onSearch(id)}>Add</button>
    </div>
  );
}
export default SearchBar;

  /*
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const query = event.target.elements.query.value;
  //   props.onSearch(query);
  // };
*/



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
 
 

