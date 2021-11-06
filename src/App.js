import logo from './logo.svg'
import './App.css'
import {printProps} from './printProps'

function App() {
  const UserInfo = ({user}) => {
    return (
      <div>
        <h1>Hello World: </h1>
        <p>This is a paragraph: </p>
      </div>
    )
  }

  const UserInfoWrapper = printProps(UserInfo)

  return (
    <div className="App">
      <h1>Hello Print Props</h1>
      <UserInfoWrapper place="Lima" address="av. Lima" />
    </div>
  )
}

export default App
