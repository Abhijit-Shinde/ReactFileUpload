import React,{useState} from "react";
import logo from "../images/Logo.png";
import './Login.css';
import '../bootstrap/css/bootstrap.min.css';

function Login({Login,error}){
    const[details,setDetails]=useState({email:"",password:""});

    const submitHandler=e=>{
        e.preventDefault();
        Login(details);
    }
    return(
		<div id="login-div">
            <div class="login-page">
				<form class="login" onSubmit={submitHandler}>
                <div class="form">
						<img className="logoImg" alt="#" src={logo}/>
                        {(error !== "")?(<div className="error">{error}</div>):""}
						<input type="text" class="login__input" placeholder="Email" onChange={e=>setDetails({...details,email:e.target.value})} value={details.email}/>
						<input type="password" class="login__input" placeholder="Password" onChange={e=>setDetails({...details,password:e.target.value})} value={details.password}/>
						<button type="submit" value="Login">Login</button>
                </div>
				</form>
            </div>
    	</div>
    )
}

export default Login;