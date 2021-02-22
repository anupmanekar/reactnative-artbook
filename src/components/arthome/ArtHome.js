/* eslint-disable prettier/prettier */

import { Container, Content} from 'native-base';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ArtCardList from './ArtCardList';

const artsjson = require('../../assets/data/arts.json');
class ArtHome extends Component {
  render() {
    return (
    <Container>
        <Content>
            <View style={styles.container}>
                <ArtCardList artsData={artsjson} />
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
    justifyContent: 'space-evenly',
  },
});

export default ArtHome;
