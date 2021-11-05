import React from 'react'

export const ControlledForm = () => {
  const [state, setState] = React.useState({
    name: '',
    age: '',
    hairColor: '',
  })

  const handleChange = event => {
    const {name, value} = event.target
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(state)
  }

  console.log('state :', state)

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={state.name}
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={state.age}
        onChange={handleChange}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="HairColor"
        value={state.hairColor}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  )
}
