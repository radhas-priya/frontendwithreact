import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const Login = () => {
    const[credentials,setCredentials]= useState({email:"",password:""});
    let navigation =useNavigate(); 
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/Login',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
        body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.success){
          // save the auth token and redirect
          localStorage.setItem('token',json.authtoken);
          // redirection to home page after login
          navigation("/Ecopy");
        }
        else{
          alert("invalid credentials");
        }
    }
    const onChangeFunc =(e)=>{
      // e.preventDefault();
      setCredentials({...credentials,[e.target.name]:e.target.value});
    }
  return (
    <>
    <h2 className="container">Login as a user and get access to the ecopy facility at freshfarms</h2>
    <div className="container my-3">
     <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control"  value={credentials.email} onChange={onChangeFunc} name="email" id="email"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password"  name="password" value={credentials.password}  onChange={onChangeFunc} className="form-control" id="password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Login
