/* eslint-disable prettier/prettier */
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/firestore' // <- needed if using firestore
// import 'firebase/functions' // <- needed if using httpsCallable
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
//import devToolsEnhancer from 'remote-redux-devtools';
import { firebaseReducer, getFirebase } from 'react-redux-firebase';
import loginReducer from '../reducers/login';
//import RNFirebase from 'react-native-firebase';

// import { createFirestoreInstance, firestoreReducer } from 'redux-firestore' // <- needed if using firestore

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: false // Firestore for Profile instead of Realtime DB
  // enableClaims: true // Get custom claims along with the profile
};

const fbConfig = {
  apiKey: 'AIzaSyCTO7_DLKNQWrAnzGCD-vajFEQoNO7Tpi4',
  authDomain: 'chrome-lambda-263813.firebaseapp.com',
  databaseURL: 'https://chrome-lambda-263813.firebaseio.com',
  projectId: 'chrome-lambda-263813',
  storageBucket: 'chrome-lambda-263813.appspot.com',
  messagingSenderId: '117557313578',
  appId: '1:117557313578:web:2730146fd19fbed60f8353',
  measurementId: 'G-GGWSB454YL',
};

// Initialize firebase instance
if (!firebase.apps.length) {
   firebase.initializeApp(fbConfig);
} else {
   firebase.app(); // if already initialized, use that one
}

// Initialize other services on firebase instance
// firebase.firestore() // <- needed if using firestore
// firebase.functions() // <- needed if using httpsCallable

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  login: loginReducer,
  // firestore: firestoreReducer // <- needed if using firestore
});


// Create store with reducers and initial state
const initialState = {};
const middlewares = [thunk.withExtraArgument(getFirebase)];
let enhancer;

if (__DEV__) {
    middlewares.push(logger);
    enhancer = compose(
      applyMiddleware(...middlewares),
      //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
} else {
    middlewares.push(logger);
    enhancer = applyMiddleware(...middlewares);
}

const store = createStore(rootReducer, {}, enhancer);
const rrfProps = {
 firebase: firebase,
 config: rrfConfig,
 dispatch: store.dispatch,
 // createFirestoreInstance // <- needed if using firestore
};

export {store, rrfProps };
