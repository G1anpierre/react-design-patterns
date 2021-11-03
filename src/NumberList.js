import React from 'react'

export const NumberList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {React.Children.toArray(
        items.map((item, index) => (
          <>
            <h4>Product {index}</h4>
            <ItemComponent {...{[resourceName]: item}} />
          </>
        )),
      )}
    </>
  )
}
