import React from 'react'
// import './checkbox.scss'

export const Checkbox = ({on, toggle}) => {
  const btnClassName = ['toggle-btn', on ? 'toggle-btn-on' : 'toggle-btn-off']
  return (
    <div className="button-container">
      <input
        type="checkbox"
        id="toggle"
        checked={on}
        onClick={toggle}
        className={btnClassName}
      />
      <label htmlFor="toggle"></label>
    </div>
  )
}
