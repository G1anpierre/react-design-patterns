import './App.css'
// import {printProps} from './printProps'
import React from 'react'
// import {loadDataHOC} from './loadDataHOC'
import {withEditableUser} from './withEditableUser'
// import {UserInfo} from './UserInfo'

function App() {
  // const UserInfoWrapper = printProps(UserInfo)

  const UserForm = ({user, onSaveUser, onResetUser}) => {
    const [localState, setLocalState] = React.useState(user)

    React.useEffect(() => {
      setLocalState(user)
    }, [user])

    if (!user) return null
    if (!localState) return null

    const handleChange = e => {
      const {name, value} = e.target
      setLocalState({...localState, [name]: value})
    }

    const handleSubmit = e => {
      e.preventDefault()
      console.log('submit', localState)
      onSaveUser(localState)
    }

    const {name, age, hairColor} = localState

    return (
      <>
        {localState && (
          <>
            <form onSubmit={handleSubmit}>
              <label>
                Name:{' '}
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                />
              </label>
              <label>
                Price:{' '}
                <input
                  type="number"
                  name="age"
                  value={age}
                  onChange={handleChange}
                />
              </label>
              <label>
                Description:{' '}
                <input
                  type="text"
                  name="hairColor"
                  value={hairColor}
                  onChange={handleChange}
                />
              </label>
              <ul>
                {React.Children.toArray(
                  user.hobbies.map(hobby => <li>{hobby}</li>),
                )}
              </ul>
              <input type="submit" value="Submit" />
            </form>
            <button onClick={onResetUser}>Reset</button>
          </>
        )}
      </>
    )
  }

  // const UserDataWrapper = loadDataHOC(UserInfo)
  const EditableUserWrapper = withEditableUser(UserForm, 2)

  return (
    <div className="App">
      <h1>Hello Print Props</h1>
      {/* <UserInfoWrapper place="Lima" address="av. Lima" /> */}
      {/* <UserDataWrapper /> */}
      <EditableUserWrapper />
    </div>
  )
}

export default App
