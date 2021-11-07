import React from 'react'

export const UserInfo = ({users}) => {
  if (!users) return null

  return (
    <div>
      <h1>Hello World of Users: </h1>
      <p>This is a paragraph: </p>

      <ul>
        {Array.isArray(users) ? (
          users.map(user => <li key={user.id}>{user.name}</li>)
        ) : (
          <li>{users.name}</li>
        )}
      </ul>
    </div>
  )
}
