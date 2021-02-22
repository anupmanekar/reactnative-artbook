/* eslint-disable prettier/prettier */
import {LOGIN_USER_SUCCESS, LOGIN_USER_REQUEST, LOGIN_USER_FAILURE}  from '../actions/login';

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      return {...state, token: action.uid, isLoggedIn: true};
    case LOGIN_USER_REQUEST:
      return {...state, isLoggedIn: false};
    case LOGIN_USER_FAILURE:
      return {...state, isLoggedIn: true};
    default:
      return state;
  }
}
