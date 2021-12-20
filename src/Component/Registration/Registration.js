import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Registration = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        setError('')
        setSuccess('')
        console.log(data);
        axios.post('https://ttmg-backend.herokuapp.com/api/auth/staffRegister', data)
            .then(res => {
                if (res.status === 200) {
                    reset()
                    setSuccess('Registration is successful');
                    window.alert('Registration is successful');
                }
            })
            .catch(error => {
                if (error.response.status === 400) {
                    setError('Some of the fields are missing or incorrect')
                }
                else if (error.response.status === 402) {
                    setError('User Already Exists with the given email id');
                }
            })
    };
    return (
        <div className='main-bg vh-100'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">

                        <div className="card my-5">

                            <form className="card-body input-bg shadow-lg p-lg-5" onSubmit={handleSubmit(onSubmit)}>
                                <h2 className="main-color fw-bold">Please Register</h2>

                                <div className="text-center">
                                    <img src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png" className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                                        width="200px" alt="profile" />
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" id="name"
                                        placeholder="Name" {...register("name")} />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email"
                                        placeholder="Email" {...register("email", {
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            }
                                        })} />
                                    <p className='text-danger float-start'>{errors.email?.message}</p>
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" id="password" placeholder="Password" {...register("password")}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="mobile"
                                        placeholder="Mobile" {...register("mobile")} />
                                </div>
                                <div className="text-center">
                                    <input className='btn btn-color px-5 mb-3 w-100' type="submit" value="Register" />
                                </div>
                                <div>
                                    <p className='text-success fw-bold'>{success}</p>
                                </div>

                                <div>
                                    <p className='text-danger fw-bold fs-5'>{error}</p>
                                </div>
                                <div id="emailHelp" className="form-text text-center mb-3 text-dark fs-5">Already Registered? <Link className='text-decoration-none' to='/login'>Login</Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;