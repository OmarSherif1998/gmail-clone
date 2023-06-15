import React from 'react';
import '../css/login.css';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { auth, provider } from './firebase';
import { login } from '../features/userSlice';
function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src={require('../images/gmail.png')} alt="" />
        <Button variant="contained" color="primary" onClick={signIn}>
          LOGIN
        </Button>
      </div>
    </div>
  );
}

export default Login;
