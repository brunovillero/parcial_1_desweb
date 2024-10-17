const apiUrl = 'http://localhost:3005/api'

const listPets = () => {
  return fetch(`${apiUrl}/pets`).then((response) => response.json())
}

const addPet = (pet) => {
  return fetch(`${apiUrl}/pets`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  }).then((response) => response.json())
}

const editPet = (pet) => {
  return fetch(`${apiUrl}/pets/${pet.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet),
  }).then((response) => response.json())
}

const getPetById = (id) => {
  return fetch(`${apiUrl}/pets/${id}`).then((response) => response.json())
}

const deletePet = (id) => {
  return fetch(`${apiUrl}/pets/${id}`, {
    method: 'DELETE',
  })
}

export { listPets, addPet, editPet, getPetById, deletePet }