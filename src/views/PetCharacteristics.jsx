import { useEffect, useState } from 'react'
const PetCharacteristics = ({ characteristics, onChange }) => {
  const [characteristicsInput, setCharacteristicsInput] = useState(characteristics)

  useEffect(() => {
    setCharacteristicsInput(characteristics)
  }, [characteristics])

  return (
    <div className='pet-characteristics'>
      <label htmlFor='characteristics'>Caracteristicas (MAX 3)</label>
      {
        characteristicsInput.map((characteristic, index) => (
          <div key={index}>
            <input
              type='text'
              id={index}
              value={characteristic}
              onChange={(e) => handleChange(characteristicsInput.map((c, i) => i === index ? e.target.value : c))}
            />
            <button onClick={() => onChange(characteristicsInput.filter((_, i) => i !== index))}>
              X
            </button>
          </div>
        ))
      }
      <button onClick={() => onChange([...characteristicsInput, ''])}>
        +
      </button>
    </div>
  )
}

export default PetCharacteristics