const initialState = {
  pets: [],
  selectedPet: null,
  displayModal: false,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PET':
      return {
        ...state,
        pets: [...state.pets, action.payload],
      }
    case 'REMOVE_PET':
      return {
        ...state,
        pets: state.pets.filter((pet) => pet.id !== action.payload),
      }
    case 'GET_PETS':
      return {
        ...state,
        pets: action.payload,
      }
    case 'UPDATE_PET':
      return {
        ...state,
        pets: state.pets.map((pet) =>
          pet.id === action.payload.id ? action.payload : pet,
        ),
      }
    case 'SET_SELECTED_PET':
      return {
        ...state,
        selectedPet: action.payload,
      }
    case 'SET_DISPLAY_MODAL':
      return {
        ...state,
        displayModal: action.payload,
      }
    default:
      return state
  }
}

export { initialState, reducer }