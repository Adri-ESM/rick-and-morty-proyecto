import Card from './Card';

const Cards = ({ characters }) => {
   return (
      <div className='cards'> {
         characters.map((character) => (
            <Card
            key = {character.id}
            image = {character.image}
            name = {character.name}
            species = {character.species}
            gender = {character.gender}
            />
      ))
      }
   </div>
   )
}

export default Cards;
