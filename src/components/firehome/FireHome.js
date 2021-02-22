/* eslint-disable prettier/prettier */

import { Container, Content, Icon, Fab} from 'native-base';
import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import FireCardList from './FireCardList';
import { useFirebase, firebaseConnect } from 'react-redux-firebase';
//import { Overlay } from 'react-native-elements';
import FFButton from '../FFButton';
import { compose } from 'redux';
import { connect } from 'react-redux';


let faker = require('faker');

const FireHome = (props) => {
  const firebase = useFirebase();
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const addData = (event) => {
    const title = faker.lorem.word(10);
    const text = faker.lorem.lines(2);
    const imageUri = faker.image.imageUrl(100, 100, 'animals', true);
    firebase.push('todos', {title, text, imageUri});
  };

  return (
    <Container>
        <Content>
            <View style={styles.container}>
                <FireCardList fireData={props.todos} />
            </View>
        </Content>
        <Fab
              active={true}
              direction="up"
              style={styles.fabStyle}
              position="bottomRight"
              onPress={() => addData()}>
              <Icon name="share" />
              </Fab>
    </Container>
  );
};

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
  fabStyle: {
    backgroundColor: '#640e23',
  },
});

const mapStateToProps = (state) => {
  const todos = state.firebase.ordered.todos || [];
  return { todos };
};

const enhance = compose(
  connect(mapStateToProps),
  firebaseConnect([
    'todos', // sync /todos from firebase into redux
  ]),
);

export default enhance(FireHome);
