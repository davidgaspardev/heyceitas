import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class RecipeDetail extends React.Component {

  render() {
    return(
      <View style={styles.container}>
        <Text>Recipe Detail</Text>
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
})
