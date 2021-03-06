import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { loginStart } from '../../redux/user/user.actions';
import { grabAuth } from '../../redux/user/user.selector';
import { LoginForm } from '../../components/LoginForm/LoginForm';

const Login = () => {
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const dispatch = useDispatch();
  const isAuth = useSelector(grabAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginStart(email, password));
    setEmail('');
    setPassword('');
  };

  const navigation = !isAuth ? (
    <LoginForm
      handleSubmit={handleSubmit}
      email={email}
      password={password}
      setEmail={setEmail}
      setPassword={setPassword}
    />
  ) : (
    <Navigate to="/home" state={{ from }} replace />
  );
  return navigation;
};

export default Login;
