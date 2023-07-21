import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Mainpage from './components/mainpage';
import { Route, Switch } from 'react-router-dom';
import Data from './components/Data';
import AddUserDetails from './components/AddUser';
import React, { useEffect, useState } from "react";
import EditUser from './components/editUser';


function App() {
 
  const [person,setPerson] = useState([]);

  useEffect(() => {
    fetch("https://645f79c67da4477ba957e18f.mockapi.io/users",{
      method:"GET"
    })
    .then((res)=>res.json())
    .then((data)=> setPerson(data))
  },[])
 


  return (
    <div className="App">
        <Switch>
            <Route exact path="/">
               <Mainpage 
               userDetail="User Details"
               contentstyle="contentparent"
               children={<Data person={person} setPerson={setPerson}/>}
               />
            </Route>
            <Route path="/add/user">
               <Mainpage 
                 userDetail="Add User"
                 children={<AddUserDetails person={person} setPerson={setPerson}/>}
                />  
            </Route>

            <Route path="/edit/user/:id">
               <Mainpage 
                 userDetail="Edit User"
                 children={<EditUser person={person} setPerson={setPerson}/>}
                />  
            </Route>

            <Route path="**">
                   <h1>404 Page not found</h1>
            </Route>

        </Switch>
    </div>
  );
}

export default App;
