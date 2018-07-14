/**
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

 // React/React-Native is an open source JavaScript library for creating user interfaces
import React from 'react';
import { StyleSheet, TouchableOpacity, Dimensions, ScrollView, Image, View, Text } from 'react-native';

import DataBase from '../../../config/DataBase';

export default class RecipeDetail extends React.Component {

  /**
   * @constructor
   * Get props of recipe & initialize the state
   */
  constructor(props) {
    super(props);

    // Get datas of the previous screen
    // JSON destructuring
    const { recipe } = this.props.navigation.state.params;

    // initilizing state
    this.state = {
      db: new DataBase('recipes'),
      recipe: recipe,
      favorite: require('../../../images/icons/not-favorite.png'),
      star: false
    };

  }

  render() {
    const { name, description, ingredients, preparation } = this.state.recipe;
    const { height } = Dimensions.get('window');

    return(
      <View style={ styles.container }>

        { /* Background (WallPaper) */ }
        <Image source={{ uri: this.state.recipe.image }} style={styles.background}/>

        { /* Context Parent */}
        <ScrollView style={[ styles.container, { backgroundColor: 'rgba( 0, 0, 0, .5)', paddingBottom: 100 } ]}>

          { /* Button to add/remove of the favorite */ }
          <TouchableOpacity style={styles.favorite} onPress={ this._recipeAddToFavorites.bind(this) }>
            <Image source={this.state.favorite} style={{ width: 24, height: 24}}/>
          </TouchableOpacity>

          { /*  */ }
          <View style={[styles.container, { padding: 5 }]}>

            <Name name={name} height={ height }/>

            <Description description={description} />

            <Ingredients ingredients={ingredients} />

            <Preparation preparation={preparation}/>

          </View>

        </ScrollView>

      </View>
    );
  }

  componentDidMount() {
    const { db, recipe } = this.state;

    db.hasData(recipe, (res) => {
      if(res) this.setState({
        favorite: require('../../../images/icons/yes-favorite.png'),
        star: true
      });
    });

  }

  _recipeAddToFavorites() {
    const { db, star, recipe } = this.state;

    if(star) {

      db.setRemove(recipe, () => this.setState({
        favorite: require('../../../images/icons/not-favorite.png'),
        star: false
      }));

    }else {

      db.setData(this.state.recipe, () => this.setState({
        favorite: require('../../../images/icons/yes-favorite.png'),
        star: true
      }));

    }
  }
}

/**
 * Functional Stateless Components (Name and Description).
 * Does not return JSX
 */
const Name = ({ name, height }) => (
  // View Parent/Container
  React.createElement( View, { style: [ styles.centerChild, { height: height, alignSelf: 'stretch' } ] },

    // View Child
    React.createElement(Text, { style: styles.recipeName }, name ) // Text (React Native)
  )
);

const Description = ({description}) => (
  // View Parent (Native View)
  React.createElement(View, { style: styles.recipeDescriptionBox },

      // Views Children (Native Text)
      // First child
      React.createElement(Text, { style: styles.recipeDescriptionTitle }, 'Descrição' ),
      // Second child
      React.createElement(Text, { style: styles.recipeDescription}, description )
    )
);

const Ingredients = ({ingredients}) => (
  // View Parent/Container
  React.createElement(View, { style: styles.recipeIngredients },
    // Views children
    React.createElement(Text, { style: styles.recipeIngredientsTitle }, 'Ingredientes'),

    /**
     * Mathod map of the Array in ECMAScript
     * LOOP: Print the ingredients
     * HERE: Views children
     */
    ingredients.map((item, index) => {

      let { name, number, unity } = item;

      name = name.charAt(0).toUpperCase() + name.slice(1);

      switch(unity) {
        case 0.33:
          unity = '1/3';
        break;

        case 0.5:
          unity = '1/2';
        break;
      }

      // Return generic view Item
      return React.createElement(Item, { isIngredient: true, key: index, index: (index + 1) + 'º', name: name, number: number, unity: unity });

    })
  )
);

const Preparation = ({preparation}) => (
  // View Parent/container
  React.createElement(View, { style: styles.recipeIngredients },
    //View children
    React.createElement(Text, { style: styles.recipeIngredientsTitle }, 'Preparação'),

    /**
     * Mathod map of the Array in ECMAScript
     * LOOP: Print the ingredients
     * HERE: Views children
     */
    preparation.map((item, index) =>
      React.createElement(Item, { isIngredient: false, index: (index + 1) + 'º', name: item})
    )
  )
);
// Generic View
const Item = ({ isIngredient, index, name, number, unity }) => (

  // View Parent/container
  React.createElement(View, { style: [ styles.item, { height: isIngredient ? 60 : 70 } ] },
    // Views children
    // First child
    React.createElement(View, { style: [ styles.itemIndex, styles.centerChild ] },

      React.createElement(Text, { style: { color: 'white' }}, index )

    ),
    // Second child
    React.createElement(View, { style: styles.itemBody },

      isIngredient ? /** true */(

        React.createElement(View, { style: styles.itemBody },

          React.createElement(View, { style: styles.itemName },

            React.createElement(Text, { style: { color: 'white' } }, name)

          ),

          React.createElement(View, { style: styles.itemQuantity },

            React.createElement(Text, { style: { color: 'white' } }, `${number} ${unity}`)

          )

        )
      ) : /** false */(
        React.createElement(View, { style: [ styles.itemName, { borderTopRightRadius: 5, borderBottomRightRadius: 5 } ] },

          React.createElement(Text, { style: { color: 'white'} }, name )

        )
      )

    )
  )

);

/*class Item extends React.Component {

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
      );

    }else{

      return(
        <View style={[ styles.itemName, { borderTopRightRadius: 5, borderBottomRightRadius: 5 } ]}>

          <Text style={{ color: 'white' }} >{ this.props.name }</Text>

        </View>
      );

    }
  }

  render() {

    return(
      <View style={[ styles.item, { height: this.props.isIngredient ? 60 : 70 } ]}>

        <View style={ [ styles.itemIndex, styles.centerChild ] }>

          <Text style={{ color: 'white' }}>{ this.props.index }</Text>

        </View>

        <View style={ styles.itemBody }>

          {
            this._isIngredient(this.props.isIngredient)
          }

        </View>

      </View>
    );
  }

}
*/


/**
 * The API StyleSheet is an abstraction similar to CSS StyleSheet.
 * OBS: Here is using the method create in the StyleSheet object.
 */
const styles = StyleSheet.create({

  // Global Style
  centerChild: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  // favorite
  favorite: {
    position: 'absolute',
    top: 20,
    right: 20,
    width: 24,
    height: 24
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

  // FSComponent Name
  recipeName: {
    fontSize: 60,
    padding: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
    color: 'white',
    fontFamily: 'umbrella'
  },

  // FSComponent Description
  recipeDescriptionBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  recipeDescriptionTitle: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  recipeDescription:{
    fontStyle: 'italic'
  },

  // FSComponent Ingredients
  recipeIngredients: {
    marginTop: 20,
    marginBottom: 20
  },
  recipeIngredientsTitle: {
    fontSize: 32,
    fontFamily: 'umbrella',
    color: 'white',
    textAlign: 'center'
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

});
