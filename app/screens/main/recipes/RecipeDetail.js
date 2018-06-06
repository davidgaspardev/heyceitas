import React from 'react'
import { StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image, View, Text } from 'react-native'

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

        { /* Background (WallPaper) */ }
        <Image source={{ uri: this.state.recipe.image }} style={styles.background}/>

        <ScrollView style={[ styles.container, { backgroundColor: 'rgba( 0, 0, 0, .5)' } ]}>

          <View style={[styles.container, { padding: 5 }]}>

            <Name name={this.state.recipe.name}/>

            <Description description={this.state.recipe.description} />

            <Ingredients ingredients={this.state.recipe.ingredients} />

            <Preparation preparation={this.state.recipe.preparation}/>

          </View>

        </ScrollView>

        { /* Button to Back */ }
        <Button event={ () => this.props.navigation.goBack() } />

      </View>
    )
  }
}

class Name extends React.Component {

  render() {

    const { height } = Dimensions.get('window')

    return(
      <View style={[ styles.centerChild, { height: height - 50, alignSelf: 'stretch'}]}>
        <Text style={styles.recipeName} >{this.props.name}</Text>
      </View>
    )
  }
}

class Description extends React.Component {

  render() {

    return(
      <View style={ styles.recipeDescriptionBox }>
        <Text style={ styles.recipeDescriptionTitle}>Descrição</Text>
        <Text style={ styles.recipeDescription }>{this.props.description}</Text>
      </View>
    );
  }

}

class Ingredients extends React.Component {

  render() {

    return(
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={{
          fontSize: 32,
          fontFamily: 'umbrella',
          color: 'white',
          textAlign: 'center'
        }}>Ingredientes</Text>

        {
          this.props.ingredients.map( (item, index) => {

            let name = item.name.charAt(0).toUpperCase() + item.name.slice(1)

            switch(item.unity) {
              case 0.33:
                item.unity = '1/3'
              break;

              case 0.5:
                item.unity = '1/2'
              break;
            }

            return <Item isIngredient={true} index={(index + 1)} name={name} number={item.number} unity={item.unity} />
          })
        }
      </View>
    )
  }
}

class Preparation extends React.Component {

  render() {

    return(
      <View style={{ marginTop: 20, marginBottom: 20 }}>
        <Text style={{
          fontSize: 32,
          fontFamily: 'umbrella',
          color: 'white',
          textAlign: 'center'
        }}>Preparação</Text>

        {
          this.props.preparation.map( (item, index) => {

            //item = item.charAt(0).toUpperCase() + item.slice(1)

            return <Item isIngredient={false} index={(index + 1) + 'º'} name={item} />
          })
        }
      </View>
    )
  }
}

class Item extends React.Component {

  _isIngredient = (isIt) => {
    if(isIt) {
      return (
        <View style={styles.itemBody} >
          <View style={ styles.itemName }>

            <Text style={{ color: 'white' }} >{ this.props.name }</Text>

          </View>
          <View style={ styles.itemQuantity }>

            <Text style={{ color: 'white' }} >{ this.props.number } { this.props.unity }</Text>

          </View>
        </View>
      )
    }else{
      return(
        <View style={[ styles.itemName, { borderTopRightRadius: 5, borderBottomRightRadius: 5 } ]}>

          <Text style={{ color: 'white' }} >{ this.props.name }</Text>

        </View>
      )
    }
  }

  render() {

    return(
      <View style={[ styles.item, { height: this.props.isIngredient ? 60 : 70 } ]}>

        { /* Item Index */ }
        <View style={ [ styles.itemIndex, styles.centerChild ] }>

          <Text style={{ color: 'white' }}>{ this.props.index }</Text>

        </View>

        { /* Item Info */ }
        <View style={ styles.itemBody }>

          {
            this._isIngredient(this.props.isIngredient)
          }

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
    flex: 1
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  recipeName: {
    fontSize: 60,
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'white',
    //fontWeight: 'bold',
    fontFamily: 'umbrella'
  },
  recipeDescriptionBox: {
    padding: 10,
    borderRadius: 5,
    //elevation: 5,
    backgroundColor: 'white'
  },
  recipeDescriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  recipeDescription:{
    fontStyle: 'italic'
  },

  name: {
    position: 'absolute',
    left: 5,
    bottom: 5,
    color: 'rgba(223, 51, 32, .8)',
    fontSize: 24,
    fontWeight: 'bold'
  },

  // IItem
  item: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 50,
    marginTop: 5,
    marginBottom: 5
  },
  itemIndex: {
    width: 40,
    height: '100%',
    backgroundColor: '#952115',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  itemBody: {
    flexDirection: 'row',
    flex: 1
  },
  itemName: {
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#c92e1d',
    flex: 3
  },
  itemQuantity: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#e65c4d',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }

})
