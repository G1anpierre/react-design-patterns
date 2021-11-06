import React from 'react'

export const OnboardingFlow = ({children, onFinish}) => {
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

  React.useEffect(() => {
    if (currentStep === 3) {
      onFinish({onboardingData})
      console.log('currentStep :', currentStep)
    }
  }, [currentStep, onboardingData, onFinish])

  const currentElement = React.Children.toArray(children)[currentStep]

  return <> {React.cloneElement(currentElement, {nextStep})} </>
}
