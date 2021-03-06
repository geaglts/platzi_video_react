import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/components/Login.scss';

import googleIcon from '../assets/static/icons/google-icon.png';
import twitterIcon from '../assets/static/icons/twitter-icon.png';

const Login = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleInput = (evt) => {
    const { name } = evt.target;
    const { value } = evt.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = form.email.split('@')[0];
    props.loginUser({ ...form, name }, '/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            type='text'
            name='email'
            className='input'
            placeholder='correo'
            value={form.email}
            onChange={handleInput}
          />
          <input
            type='password'
            name='password'
            className='input'
            placeholder='contraseña'
            value={form.password}
            onChange={handleInput}
          />
          <button className='button' type='submit'>
            Iniciar sesión
          </button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='checkbox' />
              Recuerdame
            </label>
            <a href='/'>Olvidé mi contraseña</a>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='Logo de google' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='Logo de twitter' />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta
          <Link to='/register'> Registrate</Link>
        </p>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  loginUser,
};

export default connect(null, mapDispatchToProps)(Login);
