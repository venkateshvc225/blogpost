import React from 'react';
import "../style.scss"
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="auth">
          <h1> Register Page</h1>
          <form>
            <input required type="text" placeholder='username' />
            <input required type="email" placeholder='email' />
            <input required type="password" placeholder='password' />
            <button>Register</button>
            <p>Error message here</p>
            <span>Do you have account <Link to="/login">Login </Link></span>
          </form> 
        </div>
    );
}

export default Register;
