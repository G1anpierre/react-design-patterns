import './App.css'
import {DangerButton, BigSuccessButton} from './partiallyApply'
import {Checkbox} from './Checkbox'
import React from 'react'

const useToggle = () => {
  const [on, setOn] = React.useState(true)
  const toggle = () => setOn(!on)

  return [on, toggle]
}

function App() {
  const [on, toggle] = useToggle()

  return (
    <div className="App">
      <h1>Hello React Design patterns</h1>
      <DangerButton text="Danger button" />
      <Checkbox on={on} onClick={toggle} />
      <BigSuccessButton text="Big Success button" />
    </div>
  )
}

export default App
