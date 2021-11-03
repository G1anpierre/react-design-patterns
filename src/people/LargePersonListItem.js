import React from 'react'

export const LargePersonListItem = ({person}) => {
  const {name, age, hairColor, hobbies} = person

  return (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies: </h3>
      <ul>{React.Children.toArray(hobbies.map(hobby => <li>{hobby}</li>))}</ul>
    </>
  )
}
