import React from 'react'
import {ControlledOnboardingFlow} from './ControlledOnboardingFlow'

export const ControlledOnboardingComponents = () => {
  const [onboardingData, setOnboardingData] = React.useState({})
  const [currentStep, setCurrentStep] = React.useState(0)

  const nextStep = incommingData => {
    setCurrentStep(currentStep + 1)
    const updatedData = {
      ...onboardingData,
      ...incommingData,
    }

    setOnboardingData(updatedData)
  }

  const {age} = onboardingData

  const handleOnFinish = React.useCallback(() => {
    alert(JSON.stringify(onboardingData, null, 2))
  }, [onboardingData])

  React.useEffect(() => {
    if (currentStep === 3) {
      handleOnFinish({onboardingData})
      console.log('currentStep :', currentStep)
    }
  }, [currentStep, onboardingData, handleOnFinish, age])

  const Step1 = () => {
    const [formState, setFormState] = React.useState({
      firstName: '',
      lastName: '',
      age: '',
      email: '',
    })

    const {firstName, lastName, age, email} = formState

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
            Age:{' '}
            <input
              type="number"
              onChange={handleChange}
              value={age}
              name="age"
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
  const Step2 = () => {
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
  const Step3 = () => {
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

  const ThankYou = ({age}) => {
    console.log('age outside :', age)
    React.useEffect(() => {
      if (age < 18) {
        handleOnFinish({onboardingData})
      }
    }, [age])

    return <h1>Thank you for your submission</h1>
  }

  return (
    <>
      <ControlledOnboardingFlow currentStep={currentStep} age={age}>
        <Step1 />
        <Step2 />
        {age > 18 && <Step3 />}
        <ThankYou />
      </ControlledOnboardingFlow>
    </>
  )
}
