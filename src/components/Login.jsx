import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';

import '../styles/login.scss';

const Login = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  return (
    <section className='login'>
      <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live='assertive'>
        {errMsg}
      </p>
      <h1>Sign In</h1>
      <form className='login-form'>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          autoComplete='off'
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sign In</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className='line'>
          <Link to='/register'>
            <a href='#'>Sign Up</a>
          </Link>
        </span>
      </p>
    </section>
  );
};

export default Login;
