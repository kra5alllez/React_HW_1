import React, {useState} from 'react';
import './App.css';
import { userData } from './userData.js';

const UserCard = (props) => {
  return (
    <div class="card">
          <img src={props.userData.picture} alt="Avatar"/>
          <p>Name: {props.userData.name}</p>
          <p>Age: {props.userData.age}</p>
          <p>Gender: {props.userData.gender}</p>
          <p>Balance: {props.userData.balance}</p>
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
      {state.map(user => <UserCard userData={user} />)}
    </div>
  </div>
  </div>
  );
}

export default App;