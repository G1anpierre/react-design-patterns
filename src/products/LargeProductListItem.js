import React from 'react'

export const LargeProductListItem = ({product}) => {
  const {name, price, description, rating} = product

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <div>{rating}</div>
    </>
  )
}
