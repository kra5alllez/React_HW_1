import React, {useState} from 'react';
import './App.css';
import { userData } from './userData.js';

const UserCard = (props) => {
  return (
    <div class="card">
          <p></p>
          <img src={props.user.picture} alt="Avatar"/>
          <p>Name: {props.user.name}</p>
          <p>Age: {props.user.age}</p>
          <p>Gender: {props.user.gender}</p>
          <p>Balance: {props.user.balance}</p>
      </div>
  )
}

function App() {
  const [state, setState] = useState(userData)

  const handleChange = (event) => {
    const result = [];
    userData.forEach(user => {
       if(user.name.toLowerCase().includes(event.target.value.toLowerCase())){
         result.push(user)
       }
    });
    setState(result)
  }

  const handleSort = (event) => {
    const sortType = event.target.value;
    const newState = [...state]
      .sort((a,b) => sortType === 'asc' ? a.age - b.age : b.age - a.age)
    setState(newState)
  }
  
  return (
  <div>
  <header className="App">
  <input type="text" placeholder="Enter text..." onChange={handleChange}/>
  <select onChange={handleSort}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>
   </header> 
  <div className="wrapper">
    <div className="box">
      {state.map(users => <UserCard user={users} />)}
    </div>
  </div>
  </div>
  );
}

export default App;