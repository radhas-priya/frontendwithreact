import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", age:""});
  let navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method:'POST',
      headers:{
        'Content-Type': "application/json"
      },
      body:JSON.stringify({ name: credentials.name, email:credentials.email, password:credentials.password, age:credentials.age})
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // save the auth token and redirect
      // localStorage.setItem('token',json.authtoken);
      // redirection to home page after signup
      navigation("/");
    }
    else {
      alert("some server error occured");
    }

  }
  const onChange = (e) => {
    setCredentials({ ...credentials,[e.target.name]: e.target.value});
  }
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="name" class="form-label">Enter your Name</label>
            <input type="text" class="form-control" name="name" value={credentials.name} onChange={onChange} id="forminInputname" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" name="email" value={credentials.email} onChange={onChange} id="formInputEmail" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Password</label>
            <input type="password" name="password" value={credentials.password} onChange={onChange} class="form-control" id="formInputPassword" minLength={5} required />
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">enter your age</label>
            <input type="age" name="age" value={credentials.age} onChange={onChange} class="form-control" id="formInputAge" minLength={1} required />
          </div>
          {/* <div class="mb-3">
            <label for="Textarea" class="form-label">Enter your address</label>
            <textarea class="form-control" name="textarea" value={credentials.address} id="Textarea" rows="5" cols="10">enter text</textarea>
          </div> */}
          <button type="submit" class="m-2 btn btn-primary">Submit</button>
          <Link to="/Login" className='m-2 btn btn-danger'>Already a User</Link>
        </form>
      </div>
    </>
  )
}

export default Signup