const PetCard = ({ pet, dispatch }) => {
  const handleClick = () => {
    dispatch({ type: 'SET_SELECTED_PET', payload: pet })
    dispatch({ type: 'SET_DISPLAY_MODAL', payload: true })
  }
  
  return (
    <div className='pet-card' onClick={handleClick}>
        <img src={pet.photo} alt={pet.name} />
        <p>{pet.name} - {pet.age}</p>
    </div>
  )
}

export default PetCard