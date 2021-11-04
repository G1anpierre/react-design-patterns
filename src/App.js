import {ContainerCurrentUserLoader} from './ContainerCurrentUserLoader'
import {ContainerUserLoader} from './ContainerUserLoader'
import {ContainerResourceLoader} from './ContainerResourceLoader'
import {UserInfo} from './UserInfo'
import {UserList} from './UserList'
import {DetailUser} from './DetailUser'
import {DetailProduct} from './DetailProduct'

const ReceiveData = ({isReceived, children}) =>
  isReceived ? <div>{children}</div> : null

const NotReceivedData = ({isReceived, children}) =>
  isReceived ? null : <div>{children}</div>

const GenericCall = url => async () => await fetch(url)

const getLocalStorageData = () => () => {
  const data = localStorage.getItem('message')
  return data
}

console.log(getLocalStorageData())

const Text = ({message}) => <div>{message}</div>

function App() {
  return (
    <>
      <h1>Your code goes here</h1>
      <ContainerCurrentUserLoader>
        <UserInfo />
      </ContainerCurrentUserLoader>
      <hr />
      <ContainerUserLoader>
        <ReceiveData>Received data! </ReceiveData>
        <NotReceivedData>Not Received data !</NotReceivedData>
        <UserList />
      </ContainerUserLoader>
      <hr />
      <ContainerResourceLoader
        callAPI={GenericCall('/users/2')}
        resourceName="resource"
      >
        <DetailUser />
      </ContainerResourceLoader>
      <ContainerResourceLoader
        callAPI={GenericCall('/products/5')}
        resourceName="products"
      >
        <DetailProduct />
      </ContainerResourceLoader>
      <ContainerResourceLoader
        callAPI={getLocalStorageData()}
        resourceName="message"
      >
        <Text />
      </ContainerResourceLoader>
    </>
  )
}

export default App
