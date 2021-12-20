import React,{ useState } from 'react';
import './App.css';
import logo from "./images/Logo.png";
import Login from "./Login/Login";
import Home from './Home/Home';

function App() {
  
  const adminUser={
    email:"admin@phynd.com",
    password:"phynd"
  }

  const [user,setUser]=useState({email:""});
  const [error,setError]=useState("");

  const Log=details=>{
    if(details.email===adminUser.email && details.password===adminUser.password){
      setUser({
        email:details.email
      });
    }else if(details.email!=="" && details.password!==""){
      if(details.email!==adminUser.email){
        setError("Email does not match");
      }
      else{
        setError("Password does not match");
      }
    }
    else{
      setError("Fields cannot be empty");
    }
  }

  const Logout=()=>{
    setUser({email:""});
    setError("");
  }

  return (
    <div >
      {(user.email!=="")?(
        <div>
          <div>
            <div class="topnav">
              <div className="navLogo-container">
                <img src={logo} className="navLogo" alt="Italian Trulli"/>
              </div>

              <a href="#about" onClick={Logout}>Logout</a>
            </div>
          </div>
          <Home/>
        </div>
      ):(
        <Login Login={Log} error={error}/>
      )}
    </div>

  );
}

export default App;
