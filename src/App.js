import './App.css'
import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import SearchBar from './components/SearchBar.jsx'
import characters from './data.js'
import ImageHeader from './images/Rick-and-Morty.png'

function App () {
  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
      <img src={ImageHeader} alt='imagen header' className="card-image-header"></img>
      </div>
      <div>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
      </div>
      <div>
        <Cards
          characters={characters}
        />
      </div>
      
    </div>
  )
}

export default App;