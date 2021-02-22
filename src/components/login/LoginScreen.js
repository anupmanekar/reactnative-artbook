/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import FFButton from '../FFButton';
import FFTextInput from '../FFTextInput';
import Footer from '../Footer';
import {connect} from 'react-redux';
import {signIn} from '../../actions/login';
import DashboardScreen from '../dashboard/DashboardScreen';
import {withFirebase} from 'react-redux-firebase';
import {compose} from 'redux';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      isLoggedIn: null,
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.props.uid);
    if (this.props.uid) {
      return <DashboardScreen />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.content}>
            <Image
              style={styles.logo}
              source={require('../../assets/artbook-logo.png')}
            />
            <FFTextInput
              onChange={this.handleEmailChange}
              placeholder="Email"
            />
            <FFTextInput
              onChange={this.handlePasswordChange}
              secureTextEntry={true}
              placeholder="Password"
            />
            <FFButton buttonText="Login" onPress={this.handleSubmit} />
          </View>
          <View style={styles.footer}>
            <Footer />
          </View>
        </View>
      );
    }
  }
  handleEmailChange(e) {
    this.setState({email: e.nativeEvent.text});
  }
  handlePasswordChange(e) {
    this.setState({password: e.nativeEvent.text});
  }
  handleSubmit(e) {
    console.log('hihi');
    this.props.signIn(this.state.email, this.state.password);
  }
}

const mapStateToProps = (state) => {
  const token = state.login.token || '';
  const email = state.login.email || '';
  const password = state.login.password || '';
  const isLoggedIn = state.login.isLoggedIn || '';
  const uid = state.firebase.auth.uid || '';
  return {token, email, password, isLoggedIn, uid};
};

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    signIn: (uid, pass) => dispatch(signIn(uid, pass)),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fde8e2',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    height: '95%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  logo: {
    width: 200,
    height: 200,
  },
  footer: {
    width: '100%',
    height: '5%',
    backgroundColor: '#fde8e2',
    alignItems: 'center',
    justifyContent: 'flex-end',
    fontFamily: 'TenorSans_400Regular',
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withFirebase,
);
export default enhance(LoginScreen);
