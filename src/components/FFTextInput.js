/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';
class FFTextInput extends Component {
  state = {textareaHeight: 80, isFocused: false};

  render() {
    return (
      <TextInput
        {...this.props}
        style={[styles.inputStyle, this.props.style]}
        ref={(c) => this.props.refer && this.props.refer(c)}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    width: '60%',
    margin: 10,
    borderRadius: 10,
    fontFamily: 'TenorSans_400Regular',
  },
});

export default FFTextInput;
