import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';

export default class Category extends React.Component {

  render() {
    return(
      <View style={styles.container}>

        <Text>Category</Text>

        <TouchableOpacity onPress={
          () => this.props.navigation.navigate('Recipes')
        }>
          <Text>Go to Recipes</Text>
      </TouchableOpacity>
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
