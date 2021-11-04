import React from 'react'

export const CurrentUserContext = React.createContext({})

export const ContainerCurrentUserLoader = ({children}) => {
  const [currentUser, setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    const fetchCurrentUser = async () => {
      const response = await fetch('/current-user')
      const currentUser = await response.json()
      setCurrentUser(currentUser)
    }
    fetchCurrentUser()
  }, [])

  return (
    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
      {children}
    </CurrentUserContext.Provider>
  )
}
