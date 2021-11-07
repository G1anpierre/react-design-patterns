import React from 'react'

export const withEditableUser = (Component, id) => {
  return props => {
    const [originalUser, setOriginalUser] = React.useState(null)
    const [user, setUser] = React.useState(originalUser)

    React.useEffect(() => {
      const fetchUser = async () => {
        const response = await fetch(`/users/${id}`)
        const data = await response.json()

        setOriginalUser(data)
      }
      fetchUser()
    }, [])

    // React.useEffect(() => {
    //   const postUser = async () => {
    //     const response = await fetch(`/users/${id}`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(user),
    //     })
    //     const data = await response.json()
    //     setUser(data)
    //   }
    //   postUser()
    // }, [user])

    const onSaveUser = newUser => {
      setUser({...user, ...newUser})
    }

    const onResetUser = () => {
      console.log('onResetUser')
      setUser(originalUser)
    }

    console.log('user :', user)
    console.log('originalUser :', originalUser)

    return (
      <Component
        {...props}
        user={user}
        onSaveUser={onSaveUser}
        onResetUser={onResetUser}
      />
    )
  }
}
