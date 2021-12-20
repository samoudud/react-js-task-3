import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.webp'

const Home = () => {
    return (
        <div className="header">
            <div className="header d-flex justify-content-center align-items-center">
                <div className='shadow-lg p-5 border  rounded '>
                    <div>
                        <img src={logo} alt="logo" />
                    </div>

                    <div className=' my-5'>
                        <Link to='/login'><button className='common-btn'> <i className="fas fa-sign-in-alt"></i> Login</button></Link>
                        <Link to='/register'><button className='common-btn'><i class="fas fa-user-plus"></i> Register</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;