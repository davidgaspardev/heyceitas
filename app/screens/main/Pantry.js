import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Pantry extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Pantry</Text>
      </View>
    );
  }
}

class Header extends React.Component {

  render() {
    return (
      <View style={styles.header}>
        <Text>Armario</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  //Header
  header: {
    alignSelf: 'stretch',
    height: 48,
    elevation: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
