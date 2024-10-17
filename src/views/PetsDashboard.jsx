import { useEffect, useReducer } from 'react'
import { initialState, reducer } from '../state/State.jsx'
import {listPets} from '../backend/BackendManager.jsx'
import PetsGrid from './PetsGrid.jsx'
import AddPetButton from './AddPetButton.jsx'
import PetModal from './PetModal.jsx'
const PetsDashboard = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        listPets().then((pets) => {
            dispatch({ type: 'GET_PETS', payload: pets })
        })
    }, [])
    
    return (
      <div className='pets-dashboard'>
        <h1>Adopta - Me</h1>
        <AddPetButton />
        <PetsGrid pets={state.pets} dispatch={dispatch} />
        {
            state.displayModal && state.selectedPet && <PetModal pet={state.selectedPet} dispatch={dispatch} />
        }
      </div>
    )
}

export default PetsDashboard