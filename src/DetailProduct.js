import React from 'react'

export const DetailProduct = ({products}) => {
  if (!products) return null

  const {name, price, description} = products

  console.log('products: ', products)

  return (
    <>
      <h1>Especific Info Detail Product</h1>
      <h1>
        {name} - {price} - {description}
      </h1>
    </>
  )
}
