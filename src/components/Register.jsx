import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/registration.scss';

const Register = () => {
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  // const [role, setRole] = useState('');

  const handleChange = (e) => {
    setPwd(e.target.value);
    setEmail(e.target.value);
  };

  console.log(pwd);
  console.log(email);

  return (
    <section className='registration'>
      <h1>Rejestracja</h1>
      <form className='registration__form'>
        <label htmlFor='role'>Role</label>
        <select name='choice' className='registration__form-input'>
          <option value='Administrator'>Role</option>
          <option value='Administrator'>Administrator</option>
          <option value='Dyrektor'>Dyrektor</option>
          <option value='Inspektor'>Inspektor</option>
          <option value='Kierownik'>Kierownik</option>
          <option value='Ksiegowy'>Księgowy</option>
          <option value='Pelnomocnik'>Pełnomocnik</option>
        </select>
        <label htmlFor='tel'>Phone</label>
        <input className='registration__form-input' type='text' />
        <label htmlFor='nip'>NIP</label>
        <input className='registration__form-input' type='text' />
        <label htmlFor='email'>Email</label>
        <input
          className='registration__form-input'
          type='text'
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          className='registration__form-input'
          type='text'
          id='message'
          name='message'
          onChange={handleChange}
        />
        <label htmlFor='confirmPassword'>Confirm Password </label>
        <input className='registration__form-input' type='text' />
      </form>
      <Link to='/login'>Sign In</Link>
    </section>
  );
};

export default Register;
