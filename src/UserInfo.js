import React from 'react'
import {CurrentUserContext} from './ContainerCurrentUserLoader'

export const UserInfo = () => {
  const [currentUser] = React.useContext(CurrentUserContext)

  if (!currentUser) {
    return null
  }

  const {name, age, hairColor} = currentUser

  return (
    <div>
      <h1>Initial Hello</h1>
      <h2>{name}</h2>
      <h3>{age}</h3>
      <h4>{hairColor}</h4>
    </div>
  )
}
