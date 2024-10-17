import { addPet, editPet, deletePet } from '../backend/BackendManager.jsx'

const addPetToStateAndBackend = (pet, dispatch) => {
    addPet(pet).then((newPet) => {
        dispatch({ type: 'ADD_PET', payload: newPet })
    })
}

const editPetInStateAndBackend = (pet, dispatch) => {
    editPet(pet).then((newPet) => {
        dispatch({ type: 'UPDATE_PET', payload: newPet })
    })
}

const deletePetInStateAndBackend = (id, dispatch) => {
    deletePet(id).then(() => {
        dispatch({ type: 'REMOVE_PET', payload: id })
    })
}

export { addPetToStateAndBackend, editPetInStateAndBackend, deletePetInStateAndBackend }