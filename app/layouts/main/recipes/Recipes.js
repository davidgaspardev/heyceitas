/**
 * List of requested receipts from the HeyServer server of the given category with the HTTP protocol.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react'
import { TouchableOpacity, ActivityIndicator, Dimensions, StyleSheet, FlatList, Image, View, Text } from 'react-native'

import Communication from '../../../config/Communication'

export default class Recipes extends React.Component {

  /**
   * @constructor
   *
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);

    // Destructuring
    const { navigation } = this.props;

    // State initialization
    this.state = {
      isLoading: true,
      category: navigation.state.params.category,
      list: []
    };
  }

  componentWillMount() {

    // Request recipes with HTTP protocol
    new Communication().getRecipes(this.state.category, result => this._insertItems(result));

  }


  render() {
    // Array of obejct destructuring
    const { isLoading, list } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Image source={ require('../../../images/gif/loading.gif') }
          style={{
            width: 200,
            height: 150
          }}/>
        </View>
      );
    }


    return (
      <View style={styles.container}>

        <FlatList
          data={list}
          numColumns={2}
          initialNumToRender={6}
          renderItem={({item}) => this._renderItem(item)}
          removeClippedSubviews
        />

      </View>
    );
  }

  _renderItem(item) {
    return <RecipeItem name={item.name} img={item.image} event={() => this.props.navigation.navigate('RecipeDetail', { recipe: item })}/>
  }

  _insertItems(list) {
    this.setState({
      isLoading: false,
      list: list
    });
  }

}

/**
 * Functional Stateless Components (RecipeItem).
 * Return JSX
 */
const RecipeItem = ({img, name, event}) => (
  <TouchableOpacity  style={styles.recipe} onPress={event}>

    <Image source={{ uri: img }} style={styles.recipeImage}/>

    <View style={styles.recipeLegende}>

      <Text style={styles.recipeText}>{name}</Text>

    </View>

  </TouchableOpacity>
);

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  recipe: {
    width: (width / 2),
    height: 200,
  },
  recipeImage: {
    flex: 1,
    //borderRadius: 5,
    margin: 1
  },
  recipeLegende: {
    position: 'absolute',
    top: 1,
    right: 1,
    bottom: 1,
    left: 1,
    borderRadius: 5,
    backgroundColor: 'rgba( 0, 0, 0, .3)',
    justifyContent: 'center'
  },
  recipeText: {
    color: 'white',
    //fontFamily: 'umbrella',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 5,
    textAlign: 'center'
  }
});
