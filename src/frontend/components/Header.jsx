import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/img/user-icon.png';

// Utils
import gravatar from '../utils/gravatar';

// Componente presentational
const Header = ({ user, logoutRequest }) => {
  const loginText = 'Iniciar Sesión';
  const logoutText = 'Cerrar Sesión';

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = 'email=';
    document.cookie = 'name=';
    document.cookie = 'id=';
    document.cookie = 'token=';
    logoutRequest({});
    window.location.href = '/login';
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Logo de platzi video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img
            src={hasUser ? gravatar(user.email) : userIcon}
            alt='Icono del usuario'
          />
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser && (
            <li>
              <a href='/'>{user.name}</a>
            </li>
          )}
          {!hasUser ? (
            <li>
              <Link to='/login'>{loginText}</Link>
            </li>
          ) : (
            <li>
              <Link to='/' onClick={handleLogout}>
                {logoutText}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
