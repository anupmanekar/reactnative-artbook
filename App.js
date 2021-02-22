/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Provider} from 'react-redux';
import React, {Component} from 'react';
import LoginScreen from './src/components/login/LoginScreen';
import {ReactReduxFirebaseProvider} from 'react-redux-firebase';
import {store, rrfProps} from './src/store/configureStore';
import {StyleProvider} from 'native-base';
import getTheme from './src/theme/components';


class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <LoginScreen />
          </ReactReduxFirebaseProvider>
        </Provider>
      </StyleProvider>
    );
  }
}

export default App;
