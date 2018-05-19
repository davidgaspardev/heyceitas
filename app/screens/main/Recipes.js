import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Recipes extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Recipes</Text>
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
