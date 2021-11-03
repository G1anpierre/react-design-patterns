import {Modal} from './Modal'
import {SmallPersonListItem} from './people/SmallPersonListItem'
import {LargePersonListItem} from './people/LargePersonListItem'
import {SmallProductListItem} from './products/SmallProductListItem'
import {LargeProductListItem} from './products/LargeProductListItem'

import {NumberList} from './NumberList'
import {RegularList} from './RegularList'

const people = [
  {
    name: 'John Doe',
    age: 54,
    hairColor: 'brown',
    hobbies: ['swimming', 'bicycling', 'video games'],
  },
  {
    name: 'Brenda Smith',
    age: 33,
    hairColor: 'black',
    hobbies: ['golf', 'mathematics'],
  },
  {
    name: 'Jane Garcia',
    age: 27,
    hairColor: 'blonde',
    hobbies: ['biology', 'medicine', 'gymnastics'],
  },
]

const products = [
  {
    name: 'Flat-Screen TV',
    price: '$300',
    description: 'Huge LCD screen, a great deal',
    rating: 4.5,
  },
  {
    name: 'Basketball',
    price: '$10',
    description: 'Just like the pros use',
    rating: 3.8,
  },
  {
    name: 'Running Shoes',
    price: '$120',
    description: 'State-of-the-art technology for optimum running',
    rating: 4.2,
  },
]

function App() {
  return (
    <>
      <Modal>
        <h1>Hello Inside Modal</h1>
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
        <hr></hr>
        <RegularList
          items={people}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
        <hr></hr>
        <NumberList
          items={products}
          resourceName="product"
          itemComponent={SmallProductListItem}
        />
        <hr></hr>
        <NumberList
          items={products}
          resourceName="product"
          itemComponent={LargeProductListItem}
        />
      </Modal>
      <hr></hr>
    </>
  )
}

export default App
