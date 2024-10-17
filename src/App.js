import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UsersCard from './compoinents/UsersCard';


function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setUsers(response.data));
  }, []);

  return (
    <div className="App">
     
      {users.map(user => (
       <UsersCard user={user}/>
      ))}
    </div>
  );
}

export default App;