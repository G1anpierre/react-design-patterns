import React from 'react'

export const loadDataHOC = (Component, id) => {
  return props => {
    const [data, setData] = React.useState(null)
    const url = id ? `/users/${id}` : '/users'
    React.useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url)
        const json = await response.json()
        console.log('json :', json)
        setData(json)
      }
      fetchData()
    }, [url])

    return (
      <div>
        <Component {...props} users={data} />
      </div>
    )
  }
}
