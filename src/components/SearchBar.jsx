import React from 'react';

function SearchBar(props) {
   const handleSubmit = (event) => {
     event.preventDefault();
     const query = event.target.elements.query.value;
     props.onSearch(query);
   };
 
   return (
     <div className='searchBar'>
       <form onSubmit={handleSubmit}>
         <input className="input" type="text" placeholder="search character..." name="query" />
         <button className="button" type="submit">Add</button>
       </form>
     </div>
   );
 }
 
 export default SearchBar;