import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/login.scss';

const Login = () => {
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');

  const hadleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(pwd);
  };

  return (
    <section className='login'>
      <h1>Sign In</h1>
      <form className='login__form'>
        <label htmlFor='username'>Username:</label>
        <input
          className='login__form-input'
          type='text'
          id='username'
          autoComplete='off'
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          className='login__form-input'
          type='password'
          id='password'
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button onClick={hadleSubmit}>Sign In</button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className='line'>
          <Link to='/register'>
            <span>Log Up</span>
          </Link>
        </span>
      </p>
    </section>
  );
};

export default Login;
