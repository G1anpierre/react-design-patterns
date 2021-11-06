import './App.css'
import React from 'react'
import {OnboardingComponents} from './OnboardingComponents'
import {ControlledOnboardingComponents} from './ControlledOnboardingComponents'

function App() {
  return (
    <div className="App">
      {/* <OnboardingComponents /> */}
      <ControlledOnboardingComponents />
    </div>
  )
}

export default App
