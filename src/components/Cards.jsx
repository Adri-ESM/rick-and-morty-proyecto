import Card from './Card';
//import CardsContainer from './CardsContainer';


const Cards = ({ characters, onClose}) => {
   return (
   //<CardsContainer>
      <div className='cards'> {
         characters.map((character) => (
            <Card
            key = {character.id}
            id = {character.id}
            image = {character.image}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            onClose = {onClose}

            />
      ))
      }
      </div>
   //</CardsContainer>
   )
}

export default Cards;
