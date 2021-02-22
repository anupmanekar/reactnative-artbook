/* eslint-disable prettier/prettier */

import {Container, Content, Body, Card, CardItem, Text } from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, View, Image} from 'react-native';

const cooks = require('../../assets/data/cooks.json');

class BookHome extends Component {
  render() {
      let cards = [];
      for (let i = 0; i < 10; i++) {
          cards.push(
              <Card style={styles.cardStyle} key={i}>
                  <CardItem header bordered>
                    <Text>{cooks[i].title}</Text>
                  </CardItem>
                  <CardItem bordered>
                      <Body>
                        <Image source={{uri: cooks[i].imageUri}} style={styles.cardImgStyle}/>
                      </Body>
                  </CardItem>
              </Card>
          );
      }

    return (
      <Container>
        <Content>
        <View style={styles.container}>
          {cards}
        </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fde8e2',
    alignItems: 'center',
    flexDirection: 'row',
    height: '100%',
    flexWrap: 'wrap',

  },
  cardStyle: {
    width: '100%',
  },
  cardImgStyle: {height: 200, width: '100%'},
});

export default BookHome;
