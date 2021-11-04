import React from 'react'

export const ContainerResourceLoader = ({
  callAPI = () => {},
  resourceName,
  children,
}) => {
  const [resource, setResource] = React.useState(null)

  React.useEffect(() => {
    const fetchResource = async () => {
      const response = await callAPI()
      if (typeof response !== 'string') {
        const data = await response.json()
        setResource(data)
      } else {
        setResource(response)
      }
    }
    fetchResource()
  }, [callAPI])

  const posibleChildren = ['DetailUser', 'DetailProduct', 'Text']

  console.log('resource 33:', resource)

  return (
    <>
      {React.Children.map(children, child => {
        console.log('child:', child)
        if (posibleChildren.includes(child.type.name)) {
          return React.cloneElement(child, {[resourceName]: resource})
        }
        return child
      })}
    </>
  )
}
