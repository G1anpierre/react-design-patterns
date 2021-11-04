import React from 'react'

export const ContainerUserLoader = ({children}) => {
  const [user, setUser] = React.useState(null)
  const isReceived = user !== null

  React.useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch('/users')
      const data = await response.json()
      setUser(data)
    }
    fetchUser()
  }, [])

  return (
    <>
      {React.Children.map(children, child => {
        // if (typeof child.type === 'string') {
        //   console.log('child type :', child.type)
        //   return child
        // }
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {user, isReceived})
        }
      })}
    </>
  )
}
