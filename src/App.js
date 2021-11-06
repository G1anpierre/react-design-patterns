import './App.css'
import React from 'react'
import {OnboardingFlow} from './OnboardingFlow'

function App() {
  const Step1 = ({nextStep}) => {
    const [formState, setFormState] = React.useState({
      firstName: '',
      lastName: '',
      email: '',
    })

    const {firstName, lastName, email} = formState

    const handleChange = e => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = e => {
      e.preventDefault()
      nextStep(formState)
    }

    return (
      <>
        <h1> Step 1 </h1>
        <form>
          <label>
            Name:{' '}
            <input
              type="text"
              onChange={handleChange}
              value={firstName}
              name="firstName"
            />
          </label>
          <label>
            Last Name:{' '}
            <input
              type="text"
              onChange={handleChange}
              value={lastName}
              name="lastName"
            />
          </label>
          <label>
            Email:{' '}
            <input
              type="email"
              onChange={handleChange}
              value={email}
              name="email"
            />
          </label>
          <input type="submit" value="Save" onClick={handleSubmit} />
        </form>
        <button onClick={nextStep}>next step</button>
        <pre>{JSON.stringify(formState, null, 2)}</pre>
      </>
    )
  }
  const Step2 = ({nextStep}) => {
    const [formState, setFormState] = React.useState({
      address: '',
      city: '',
      state: '',
      zip: '',
    })

    const {address, city, state, zip} = formState

    const handleChange = e => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = e => {
      e.preventDefault()
      nextStep(formState)
    }

    return (
      <>
        <h1> Step 2 </h1>
        <form>
          <label>
            Adress:{' '}
            <input
              type="text"
              onChange={handleChange}
              value={address}
              name="address"
            />
          </label>
          <label>
            City:{' '}
            <input
              type="text"
              onChange={handleChange}
              value={city}
              name="city"
            />
          </label>
          <label>
            State:{' '}
            <input
              type="text"
              onChange={handleChange}
              value={state}
              name="state"
            />
          </label>
          <label>
            Zip:{' '}
            <input type="text" onChange={handleChange} value={zip} name="zip" />
          </label>
          <input
            type="submit"
            value="Save and next step"
            onClick={handleSubmit}
          />
          <pre>{JSON.stringify(formState, null, 2)}</pre>
        </form>
      </>
    )
  }
  const Step3 = ({nextStep}) => {
    const [formState, setFormState] = React.useState({
      phone: '',
      aggree: false,
    })

    const handleChange = e => {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = e => {
      e.preventDefault()
      nextStep(formState)
    }

    const {phone, aggree} = formState

    return (
      <>
        <h1> Step 3 </h1>
        <form>
          <label>
            Phone:{' '}
            <input
              type="tel"
              onChange={handleChange}
              value={phone}
              name="phone"
            />
          </label>
          <label>
            Agree to terms and conditions:{' '}
            <input
              type="checkbox"
              onChange={handleChange}
              checked={aggree}
              name="aggree"
            />
          </label>
          <input
            type="submit"
            value="Save and next step"
            onClick={handleSubmit}
          />
        </form>
      </>
    )
  }

  const ThankYou = () => {
    return <h1>Thank you for your submission</h1>
  }

  const handleOnFinish = ({onboardingData}) => {
    console.log('onboardingData', onboardingData)
    alert(JSON.stringify(onboardingData, null, 2))
  }

  return (
    <div className="App">
      <OnboardingFlow onFinish={handleOnFinish}>
        <Step1 />
        <Step2 />
        <Step3 />
        <ThankYou />
      </OnboardingFlow>
    </div>
  )
}

export default App
