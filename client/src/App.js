import './App.css';
import {useEffect, useState} from 'react';
import Axios from "axios";
function App() {
  const [listofusers, setlistofusers] = useState([]);
  const [name, setname] = useState("");
  const [age, setage] = useState(0);
  const [userName, setuserName] = useState("");
   useEffect(()=>{
    Axios.get("http://localhost:3001/getUsers").then((response)=>{
      setlistofusers(response.data);
    })
   const createUser=()=>{
    Axios.post("http://localhost:3001/getUsers",{
      name :"",
      age:0,
      userName:"",
    }).then((response)=>{
      alert("USER CREATEd");
    })
   }
   },[]);
  return (
    <div className="App">
      <div className="username">
        {listofusers.map((user)=>{
          return (
            <div>
              <h1>id:{user._id}</h1>
              <h1>name:{user.name}</h1>
              <h1>age:{user.age}</h1>
              
            </div>
          )
        })}
      </div>
      <div>
        <input type="text" placeholde="name"></input>
        <input type="number" placeholde="age"></input>
        <input type="text" placeholde="username"></input>
        <button type='submit' onClick={createUser}></button>
      </div>
    </div>
  );
}

export default App;
