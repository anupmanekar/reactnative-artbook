/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ArtHome from '../arthome/ArtHome';
import BookHome from '../bookhome/BookHome';
import { withFirebase } from 'react-redux-firebase';
import FireHome from '../firehome/FireHome';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

class TopTab extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tab.Navigator>
          <Tab.Screen name="Art" component={ArtHome} />
          <Tab.Screen name="Book" component={BookHome} />
          <Tab.Screen name="Fire" component={FireHome} />
      </Tab.Navigator>
  );
  }
}


class DashboardScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={TopTab} />
          <Drawer.Screen name="Book" component={BookHome} />
      </Drawer.Navigator>
    </NavigationContainer>
    );
  }
}

export default withFirebase(DashboardScreen);
