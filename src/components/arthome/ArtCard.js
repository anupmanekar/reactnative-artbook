/* eslint-disable prettier/prettier */

import { Body, Card, CardItem, Text, Thumbnail } from 'native-base';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

class ArtCard extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Card style={styles.cardStyle}>
            <CardItem header bordered>
            <Text style={styles.textContent}>{this.props.title}</Text>
            </CardItem>
            <CardItem bordered>
                <Body>
                <Thumbnail square large source={{uri: this.props.imageUri}} />
                </Body>
            </CardItem>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 5,
    borderColor: '#640e23',
    margin: 5,
    width: '45%',
  },
  cardItemStyle: {
      borderWidth: 1,
  },
  textContent: {
      fontFamily: 'TenorSans_400Regular',
      color: '#640e23',
  },
});

export default ArtCard;
