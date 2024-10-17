import { useEffect, useState } from 'react'
import PetCharacteristics from './PetCharacteristics.jsx'
import { addPet, editPet } from '../backend/BackendManager.jsx'
const PetDetailsForm = ({ pet, buttonText }) => {
  const [id, setId] = useState(pet?.id || '')
  const [name, setName] = useState(pet?.name || '')
  const [age, setAge] = useState(pet?.age || '')
  const [type, setType] = useState(pet?.type || '')
  const [photo, setPhoto] = useState(pet?.photo || '')
  const [characteristics, setCharacteristics] = useState(pet?.characteristics || [])
  const [description, setDescription] = useState(pet?.description || '')

  const onSubmit = (e) => {
    e.preventDefault()
    const petToSave = {
        id: id,
        name: name,
        age: age,
        type: type,
        photo: photo,
        characteristics: characteristics,
        description: description,
    }
    if(pet){
        editPet(petToSave)
    }else{
        addPet(petToSave)
    }
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
    <form>
      <label htmlFor='name'>Nombre</label>
      <input
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor='age'>Edad</label>
      <input
        type='text'
        id='age'
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label htmlFor='type'>Tipo</label>
      <input
        type='text'
        id='type'
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <label htmlFor='photo'>Foto</label>
      <input
        type='text'
        id='photo'
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <PetCharacteristics
        characteristics={characteristics}
        onChange={setCharacteristics}
      />
      <label htmlFor='description'>Descripción</label>
      <textarea
        id='description'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={onSubmit}>{buttonText}</button>
    </form>
  )
}

export default PetDetailsForm
      
