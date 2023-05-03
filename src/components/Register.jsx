import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/registration.scss';

const Register = () => {
  const [tel, setTel] = useState('');
  const [nip, setNip] = useState('');
  const [pwd, setPwd] = useState('');
  const [email, setEmail] = useState('');
  // const [role, setRole] = useState('');
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleChange = (e) => {
    setTel(e.target.value);
    setNip(e.target.value);
    setPwd(e.target.value);
    setEmail(e.target.value);
  };

  console.log(tel);
  console.log(nip);
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
        <input
          className='registration__form-input'
          placeholder='+48736768348'
          type='text'
          onChange={handleChange}
        />
        <label htmlFor='nip'>NIP</label>
        <input
          className='registration__form-input'
          placeholder='1234567899'
          type='text'
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          className='registration__form-input'
          placeholder='youremail@gmail.com'
          type='email'
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          className='registration__form-input'
          type={passwordShown ? 'text' : 'password'}
          id='password'
          name='password'
          onChange={handleChange}
        />
        <button onClick={togglePassword}>Show Password</button>
        <label htmlFor='confirmPassword'>Confirm Password </label>
        <input
          className='registration__form-input'
          type={passwordShown ? 'text' : 'password'}
          id='password'
          name='password'
        />
      </form>
      <Link to='/login'>Sign In</Link>
    </section>
  );
};

export default Register;
