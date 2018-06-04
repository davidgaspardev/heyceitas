import React from 'react'
import { StyleSheet, TouchableOpacity, ScrollView, Image, View, Text } from 'react-native'

import Button from './components/ReturnButton'

export default class RecipeDetail extends React.Component {

  constructor(props) {
    super(props)

    const { state } = this.props.navigation

    this.state = {
      recipe: state.params.recipe
    }
  }

  render() {
    return(
      <View style={ styles.container }>

        <Button event={ () => this.props.navigation.goBack() } />

        <ScrollView style={styles.container}>


          <Image source={{ uri: this.state.recipe.image }} style={styles.image}/>

          <View style={[styles.container, { padding: 5 }]}>

            <Text style={styles.name}>{this.state.recipe.name}</Text>

            <Text>{this.state.recipe.description}</Text>

            <Text style={{
              fontSize: 19,
              fontWeight: 'bold'
            }}>Ingredientes</Text>

            {
              this.state.recipe.ingredients.map( (item, index) =>
              <IngredientItem
                index={(index + 1)}
                name={item.name}
                number={item.number}
                unity={item.unity}
              /> )
            }

            {
              this.state.recipe.preparation.map( (item, index) => (<Text>{index} - {item}</Text>) )
            }

          </View>

        </ScrollView>

      </View>
    )
  }
}

class IngredientItem extends React.Component {

  render() {

    return (
      <View style={ styles.ingredient }>

        { /* Index of the Ingredient */ }
        <View style={ [ styles.ingredientIndex, styles.centerChild ] }>

          <Text style={{ color: 'white' }}>{ this.props.index }</Text>

        </View>

        { /* Ingredient Info */ }
        <View style={ styles.ingredientBody }>

          { /* Ingredient Name */ }
          <View style={ styles.ingredientName }>

            <Text style={{ color: 'white' }} >{ this.props.name }</Text>

          </View>

          { /* Ingredient Quantity */ }
          <View style={ styles.ingredientQuantity }>

            <Text style={{ color: 'white' }} >{ this.props.number } { this.props.unity }</Text>

          </View>

        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({

  // Global Style
  centerChild: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  // Container Style
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  image: {
    width: '100%',
    height: 200
  },
  name: {
    fontSize: 24
  },

  // Ingredient Style
  ingredient: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 50,
    marginTop: 5,
    marginBottom: 5
  },
  ingredientIndex: {
    width: 40,
    height: 50,
    backgroundColor: '#952115',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  ingredientBody: {
    flexDirection: 'row',
    flex: 1
  },
  ingredientName: {
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#c92e1d',
    flex: 3
  },
  ingredientQuantity: {
    padding: 5,
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#e65c4d',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }

})
