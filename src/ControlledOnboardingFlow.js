import React from 'react'

export const ControlledOnboardingFlow = ({children, currentStep, age}) => {
  const currentElement = React.Children.toArray(children)[currentStep]
  return <>{React.cloneElement(currentElement, {age})}</>
}
