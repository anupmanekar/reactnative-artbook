/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
class Footer extends Component {
  state = {textareaHeight: 80, isFocused: false};
  render() {
    return (
        <Text style={styles.footerText}> Developed By Innovtinent Inc.</Text>
    );
  }
}

const styles = StyleSheet.create({
  footerText: {
    fontSize: 12,
    fontFamily: 'TenorSans_400Regular',
    fontWeight: 'bold',
  },
});

export default Footer;
