import React from 'react';
import "../style.scss"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="auth">
          <h1> Login Page</h1>
          <form>
            <input type="text" placeholder='username' />
            <input type="password" placeholder='password' />
            <button>LOGIN</button>
            <p>Error message here</p>
            <span>Don't have account <Link to="/Register">Register </Link></span>
          </form> 
        </div>
    );
}

export default Login;
