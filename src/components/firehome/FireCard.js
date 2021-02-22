/* eslint-disable prettier/prettier */

import { Body, Card, CardItem, Text, Thumbnail } from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

const FireCard = (props) => {
  return (
      <Card style={styles.cardStyle}>
          <CardItem header bordered>
          <Text style={styles.cardTextStyle}>{props.title}</Text>
          </CardItem>
          <CardItem bordered>
              <Body>
              <Thumbnail square large source={{uri: props.imageUri}} />
              </Body>
          </CardItem>
      </Card>
  );
};

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
  cardTextStyle: {
      fontFamily: 'TenorSans_400Regular',
      color: '#640e23',
  },
});

export default FireCard;
