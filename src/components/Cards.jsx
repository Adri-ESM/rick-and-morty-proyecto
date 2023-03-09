import Card from './Card';
//import CardsContainer from './CardsContainer';


const Cards = ({ characters}) => {
   return (
   //<CardsContainer>
      <div className='cards'> {
         characters.map((character) => (
            <Card
            id = {character.id}
            image = {character.image}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            />
      ))
      }
      </div>
   //</CardsContainer>
   )
}

export default Cards;
