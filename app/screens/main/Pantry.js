import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Pantry extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Pantry</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
