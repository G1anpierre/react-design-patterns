import './App.css'
import {UncontrolledForm} from './UncontrolledForm'
import {ControlledForm} from './ControlledForm'

function App() {
  return (
    <div className="App">
      <h1>Your code goes here</h1>
      <h3>Uncontrolled Form</h3>
      <UncontrolledForm />
      <hr></hr>
      <h3>Controlled Form</h3>
      <ControlledForm />
    </div>
  )
}

export default App
