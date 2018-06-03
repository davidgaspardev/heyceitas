import React from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';

export default class RecipeDetail extends React.Component {

  constructor(props) {
    super(props)

    const { state } = this.props.navigation;

    this.state = {
      recipe: state.params.recipe
    }
  }

  render() {
    return(
      <ScrollView style={styles.container}>

        <Image source={{ uri: this.state.recipe.image }} style={styles.image}/>

        <View style={[styles.container, { padding: 10 }]}>

          <Text style={styles.name}>{this.state.recipe.name}</Text>

          <Text>{this.state.recipe.description}</Text>

          {
            this.state.recipe.ingredients.map( (item, index) => (<Text>{index} - {item.name} {item.number}{item.unity}</Text>) )
          }

          {
            this.state.recipe.preparation.map( (item, index) => (<Text>{index} - {item}</Text>) )
          }

        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  image: {
    width: '100%',
    height: 200
  },
  name: {
    marginTop: -10
  }
})
