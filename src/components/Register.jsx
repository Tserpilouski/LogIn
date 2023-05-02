import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/registration.scss';

const Register = () => {
  const [pwd, setPwd] = useState('');

  return (
    <section className='registration'>
      <h1>Registration</h1>
      <form className='registration__form'>
        <label htmlFor='role'>Role</label>
        <input type='text' />
        <label htmlFor='tel'>Phone</label>
        <input type='text' />
        <label htmlFor='nip'>NIP</label>
        <input type='text' />
        <label htmlFor='email'>Email</label>
        <input type='text' />
        <label htmlFor='password'>Password</label>
        <input type='text' />
        <label htmlFor='confirmPassword'>Confirm Password </label>
        <input type='text' />
      </form>
      <Link to='/login'>Sign In</Link>
    </section>
  );
};

export default Register;
