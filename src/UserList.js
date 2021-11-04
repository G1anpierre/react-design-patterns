import React from 'react'

export const UserList = ({user}) => {
  return user ? (
    <div>
      <h1>UserList</h1>
      {React.Children.toArray(
        user.map(user => (
          <li>
            Name: {user.name} - Ager: {user.age} - HairColor: {user.hairColor}
          </li>
        )),
      )}
    </div>
  ) : null
}
