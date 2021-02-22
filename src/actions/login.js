/* eslint-disable prettier/prettier */
//import axios from 'axios';

//import { getFirebase } from 'react-redux-firebase';
const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

const loginSubmitting = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};

const loginSuccess = (data) => {
  return {
    type: LOGIN_USER_SUCCESS,
    token: data.token,
  };
};
const signIn = (email, password) => (dispatch, getState, getFirebase) => {
    dispatch(loginSubmitting());
    // eslint-disable-next-line prettier/prettier
    return getFirebase().auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        dispatch(loginSuccess(userCredential.user));
      });
  };
export {
  signIn,
  loginSubmitting,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
};
