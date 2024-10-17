import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PetDetailsForm from './PetDetailsForm.jsx'
import { getPetById } from '../backend/BackendManager.jsx'
import '../styles/PetDetails.css'

const PetDetails = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [pet, setPet] = useState(null)

  const handleRedirect = () => {
    window.location.href = '/'
  }

  useEffect(() => {
    if (id) {
      getPetById(id).then((pet) => {
        setPet(pet)
        setTitle('Editar tu mascota')
      })
    }else{
      setTitle('Publica una mascota')
      setPet(null)
    }
  }, [])
 
  return (
    <div className='pet-details'>
      <h1>{title}</h1>
      <button onClick={handleRedirect}>Ir al inicio</button>
      <PetDetailsForm
          pet={pet}
          buttonText={id ? 'Guardar' : 'Publicar'}
      />
    </div>
  )
}

export default PetDetails