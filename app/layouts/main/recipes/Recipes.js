/**
 * List of requested receipts from the HeyServer server of the given category with the HTTP protocol.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react'
import { TouchableOpacity, Dimensions, StyleSheet, FlatList, Image, View, Text } from 'react-native'

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
      list: [],
      err: null
    };

    this.restartConexao = this.restartConexao.bind(this);

  }

  restartConexao() {
    this.setState({ err: null }, this.startConexao());
  }

  startConexao() {
    new Communication('http://18.222.51.173', 8080).getRecipes(this.state.category,
      (result, err) => {

        // An error occurred in the request
        if(err) this.setState({ err });

        // Success in requisition
        else this._insertItems(result);

      });
  }

  componentWillMount() {

    // Request recipes with HTTP protocol
    this.startConexao();

  }


  render() {
    // Array of obejct destructuring
    const { isLoading, list, err } = this.state;

    if (isLoading) {
      return (
        <View style={styles.container}>
          <Image source={ require('../../../images/gif/loading.gif') }
          style={{
            width: 200,
            height: 150
          }}/>

          {
            err ? this._renderError() : null
          }

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

  _renderError() {
    const { err } = this.state;

    return (
      <TouchableOpacity style={styles.errContainer} onPress={this.restartConexao} >

        <Text style={styles.errText} >Desculpa ocorreu um erro, CLIQUE AQUI para tentar novamente...</Text>
        <Text style={styles.errText} maxLine={1} >{`OBS: ${err}`}</Text>

      </TouchableOpacity>
    );

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
  },

  errContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    left: 0,

    height: 50,
    padding: 10,
    backgroundColor: '#ff5c5c',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  errText: {
    fontSize: 10,
    color: 'white'
  }
});
