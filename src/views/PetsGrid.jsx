import PetCard from './PetCard.jsx'
import { useEffect } from 'react'
const PetsGrid = ({ pets, dispatch }) => {
  return (
    <div className='pets-grid'>
      {
        pets.length > 0 && pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} dispatch={dispatch} />
        ))
      }
    </div>
  )
}

export default PetsGrid