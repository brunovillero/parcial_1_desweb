const AddPetButton = () => {
    const handleClick = () => {
        window.location.href = '/add'
    }
    return (
        <button className='add-pet-button' onClick={handleClick}>
            <span>Agregar Mascota</span>
        </button>
    )
}

export default AddPetButton