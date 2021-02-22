/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const FFButton = (props) => {
  return (
      <TouchableOpacity
        {...props}
        style={styles.buttonStyle}
        underlayColor="#fff">
        <Text style={styles.buttonTextStyle}>{props.buttonText}</Text>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 10,
    backgroundColor: '#640e23',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: 'TenorSans_400Regular',
  },
});

export default FFButton;
