/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ApiUtils from './src/ApiUtils'
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



function getFetch() {

   fetch('https://facebook.github.io/react-native/movies.json')
   .then(ApiUtils.checkStatus)
  .then(response => {
    const statusCode = response.status;
    const data = response.json();
    return {codekey: statusCode, datakey: data};
  })
  .then(res => {
    console.log(res.codekey);
    console.log(res.datakey);
  })
  .catch(error => {
    console.error(error);
  });

}

type Props = {};
export default class App extends Component<Props> {
  render() {

    getFetch();

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          taoliu huang
        </Text>
        <Text style={styles.instructions}>
          second
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    fontSize: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
