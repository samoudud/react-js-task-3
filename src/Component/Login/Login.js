import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [error, setError] = useState('');
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        setError('')
        console.log(data);
        axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffLogin', data)
            .then(res => {
                if (res.status === 200) {
                    history.push('/success');
                    window.alert('Logged in successfully');
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    setError('Email/password is missing')
                }
                else if (error.response.status === 401) {
                    setError('Email or password is incorrect');
                }
            })
    };
    return (
        <div className="main-bg vh-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className="card my-5">
                            <form className="card-body input-bg shadow-lg p-lg-5" onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="main-color fw-bold">Please Login</h2>
                                <div className="text-center">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                        width="200px" alt="profile" />
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="email"
                                        placeholder="Email" {...register("email")} />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="password" {...register("password")}
                                    />
                                </div>
                                <div className="text-center">
                                    <input className='btn btn-color px-5 mb-3 w-100' type="submit" value="Login" />

                                </div>

                                <div>
                                    <p className='text-danger fw-bold'>{error}</p>
                                </div>
                                <div id="emailHelp" className="form-text text-center mb-3 text-dark fs-5">Not
                                    Registered? <Link className='text-decoration-none' to='/register'>Register</Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;