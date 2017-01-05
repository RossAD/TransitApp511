/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Transit } from './src/app/transit.js'

export default class TransitApp511 extends Component {
  render() {
    return (
      <Transit />
      /*
       *<View style={styles.container}>
       *  <Text style={styles.welcome}>
       *    Welcome to React Native!
       *  </Text>
       *  <Text style={styles.instructions}>
       *    To get started, edit index.ios.js
       *  </Text>
       *  <Text style={styles.instructions}>
       *    Press Cmd+R to reload,{'\n'}
       *    Cmd+D or shake for dev menu
       *  </Text>
       *</View>
       */
    );
  }
}

AppRegistry.registerComponent('TransitApp511', () => TransitApp511);
