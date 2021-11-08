import React from 'react'

const isObject = obj => typeof obj === 'object' && obj !== null

export const RecursiveComponent = ({data}) => {
  if (!isObject(data)) {
    return <span>{data}</span>
  }

  const pairs = Object.entries(data)

  console.log('pairs :', pairs)

  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          <span>{key} :</span>
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  )
}
