/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle, FcInvite } from 'react-icons/fc';
import { loginGoogle, loginEmailPassword } from '../actions/authActions';

const Login = (props) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({ name: '', password: '' });
  const handleChange = (evento) => {
    setForm({
      ...form,
      [evento.target.name]: evento.target.value,
    });
  };
  const handleSubmit = (evento) => {
    evento.preventDefault();
    dispatch(loginEmailPassword(form.name, form.password));
  };
  const handleLoginGoogle = () => {
    dispatch(loginGoogle());
  };
  return (
    <div>
      <h1>Iniciar sesion</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Correo
          <input type='email' name='name' onChange={handleChange} />
        </label>
        <label>
          Contraseña
          <input type='password' name='password' onChange={handleChange} />
        </label>
        <button type='submit'>Ingresar</button>
      </form>
      <div onClick={handleLoginGoogle}><FcGoogle size='4rem' /></div>
      <Link to='/auth/register'>
        Registrate con Correo
        <FcInvite size='4rem' />
      </Link>
    </div>
  );
};

export default Login;
