import React from 'react'
import styled from 'styled-components'

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`

// stop propagation react event
const stopPropagation = e => e.stopPropagation()

export const Modal = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen && (
        <ModalBackground onClick={() => setIsOpen(false)}>
          <ModalBody onClick={stopPropagation}>
            <h1>Modal</h1>
            {children}
            <button onClick={() => setIsOpen(false)}>Close Modal</button>
          </ModalBody>
        </ModalBackground>
      )}
    </>
  )
}
