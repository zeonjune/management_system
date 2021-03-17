import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer'

const customers = [{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name':'안성욱',
  'birthday':'970602',
  'gender': '남자',
  'job':'Crazyones'
},{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name':'신대령',
  'birthday':'970602',
  'gender': '남자',
  'job':'관악경찰서'
},{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name':'김성욱',
  'birthday':'970602',
  'gender': '남자',
  'job':'Crazyones'
}
]
class App extends Component{
  render() {
    return (
      <div>
        {customers.map( c => {return ( <Customer key ={c.id} id = {c.id} image ={c.image} name={c.name} birthday = {c.birthday} gender = {c.gender} job = {c.job}/>)
        }
        )
      }
      </div>
    )
  }
}

export default App;
