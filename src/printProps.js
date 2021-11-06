import React from 'react'

export const printProps = Component => {
  return props => {
    console.log('props :', props)
    return (
      <div>
        <Component {...props} />
      </div>
    )
  }
}
