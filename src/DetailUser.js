import React from 'react'

export const DetailUser = ({resource}) => {
  if (!resource) {
    return null
  }
  const {name, age, hairColor} = resource

  return (
    <div>
      {name} - {age} - {hairColor}
    </div>
  )
}
