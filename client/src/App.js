import './App.css';
import {useEffect, useState} from 'react';
import Axios from "axios";
function App() {
  const [listofusers, setlistofusers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");
   useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setlistofusers(response.data);
    })
  },[]);
   const createUser=()=>{
    console.log("clicked");
    Axios.post("http://localhost:3001/createUsers",{
      name,
      age,
      username,
    }).then((response)=>{
      setlistofusers([...listofusers,{name,age,username}])
    })
   }
 
  return (
    <div className="App">
      <div className="username">
        {listofusers.map((user)=>{
          return (
            <div>
             
              <h1>name:{user.name}</h1>
              <h1>age:{user.age}</h1>
              <h1>age:{user.Username}</h1>
              <br/>
              
            </div>
          )
        })}
      </div>
      <div>
        <input
          type="text"
          placeholder="Name..."
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Age..."
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <button onClick={createUser}> Create User </button>
      </div>
    </div>
  );
}

export default App;
