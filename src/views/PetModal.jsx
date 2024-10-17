import { useEffect, useState } from 'react'
import { deletePetInStateAndBackend } from '../state/StateManager.jsx'

const PetModal = ({ pet, dispatch }) => {
  const [id, setId] = useState(pet?.id || '')
  const [name, setName] = useState(pet?.name || '')
  const [age, setAge] = useState(pet?.age || '')
  const [type, setType] = useState(pet?.type || '')
  const [photo, setPhoto] = useState(pet?.photo || '')
  const [characteristics, setCharacteristics] = useState(pet?.characteristics || [])
  const [description, setDescription] = useState(pet?.description || '')
  
  const onEdit = () => {
    window.location.href = '/edit/' + pet.id
  }
  const onSave = (e) => {
    e.preventDefault()
    deletePetInStateAndBackend(id, dispatch)
    dispatch({ type: 'SET_DISPLAY_MODAL', payload: false })
  }

  useEffect(() => {
    setId(pet?.id || '')
    setName(pet?.name || '')
    setAge(pet?.age || '')
    setType(pet?.type || '')
    setPhoto(pet?.photo || '')
    setCharacteristics(pet?.characteristics || [])
    setDescription(pet?.description || '')
  }, [pet])

  return (
    <div className='pet-modal'>
      <div className="pet-modal-header">
        Detalle de {pet.name}
        <button onClick={onEdit}>Edit</button>
      </div>
      <div className="pet-modal-body">
        <img src={photo} alt={name} />
        <p>Edad: {age}</p>
        <div className='pet-modal-characteristics'>
          {
            characteristics.map((characteristic, index) => (
              <div key={index}>
                <p>{characteristic}</p>
              </div>
            ))
          }
        </div>
        <p>Tipo: {type}</p>
        <p>Descripción: {description}</p>
      </div>
      <div className="pet-modal-footer">
        <button onClick={onSave}>Adoptar</button>
      </div>
    </div>
  )
}

export default PetModal