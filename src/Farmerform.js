import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Farmerform = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", age: "", city: " ", state: " ", zip: " ", phonenumber: "" });
    let navigation = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/api/auth/farmeruser", {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, age: credentials.age, city: credentials.city, state: credentials.state, zip: credentials.zip, phonenumber: credentials.phonenumber })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            // redirection to home page after signup
            navigation("/Fillupforms");
        }
        else {
            alert("some server error occured");
        }

    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }
    return (
        <>
            <div id="registration-formid ">
                <center>
                    <h1>Ready to join FRESH FARMS?</h1>
                    <h2> Want to learn? Fill the form down below</h2>
                    <div className="container" id="formid">
                        <form class="row g-3 formstart" onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="validationServer01" class="form-label">Full name</label>
                                <input type="text" class="form-control is-valid" id="formInputName" name="name" onChange={onChange} value={credentials.name} required />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input type="email" class="form-control" name="email" value={credentials.email} onChange={onChange} id="formInputEmail" aria-describedby="emailHelp" />
                                <div id="email" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" name="password" value={credentials.password} onChange={onChange} class="form-control" id="formInputPassword" minLength={5} required />
                            </div>
                            <div class="mb-3">
                                <label for="age" class="form-label">enter your age</label>
                                <input type="age" name="age" value={credentials.age} onChange={onChange} class="form-control" id="formInputAge" minLength={1} required />
                            </div>
                            <div class="col-md-6">
                                <label for="validationServer03" class="form-label">City</label>
                                <input type="text" class="form-control is-invalid" name="city" value={credentials.city} onChange={onChange} id="validationServer03" aria-describedby="validationServer03Feedback" required />
                                <div id="validationServer03Feedback" class="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationServer04" class="form-label">State</label>
                                <input class="form-select is-invalid" name="state" value={credentials.state} onChange={onChange} id="validationServer04" aria-describedby="validationServer04Feedback" required>
                                </input>
                                <div id="validationServer04Feedback" class="invalid-feedback">
                                    Please select a valid state.
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="validationServer05" class="form-label">Zip</label>
                                <input type="text" class="form-control is-invalid" name="zip" value={credentials.zip} onChange={onChange} id="validationServer05" aria-describedby="validationServer05Feedback" required />
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                    Please provide a valid zip.
                                </div>

                            </div>
                            <div class="col-md-3">
                                <label for="validationServer05" class="form-label">phonenumber</label>
                                <input type="text" class="form-control is-invalid" name="phonenumber" value={credentials.phonenumber} onChange={onChange} id="validationServer05" aria-describedby="validationServer05Feedback" required />
                                <div id="validationServer05Feedback" class="invalid-feedback">
                                    Please provide a valid phonenumber.
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-dark" type="submit">Signup as a farmer</button>
                                    <Link to="/Fillupforms" className='m-2 btn btn-danger'>Already a User</Link>
                                   {/* <button className='btn btn-success'> <Link to="Farmerdashboard">Already a user</Link></button> */}

                                </div>
                            </div>
                        </form>
                    </div>
                </center>


            </div>




        </>
    )
}

export default Farmerform
