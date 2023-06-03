import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const FarmerLogin = () => {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    let navigation = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/auth/FarmerLogin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            // redirection to home page after login
            navigation("/Chat");
        }
        else {
            alert("invalid credentials");
        }
    }
    const onChangeFunc = (e) => {
        // e.preventDefault();
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <>
        <div classname="farmerloginform container" id="farmerloginform">
        <h1 id='farmerloginformh1' >Already a user!please fill up the  Farmer's  loginform</h1>
            <div className="container my-3 loginform">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChangeFunc} name="email" id="email" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" value={credentials.password} onChange={onChangeFunc} className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            </div>
        </>
    )
}

export default FarmerLogin
