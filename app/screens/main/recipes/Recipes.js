/**
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react'
import { TouchableOpacity, ActivityIndicator, Dimensions, StyleSheet, FlatList, Image, View, Text } from 'react-native'

import Communication from '../../../config/Communication'

export default class Recipes extends React.Component {

  constructor(props) {
    super(props);

    const { navigation } = this.props;

    this.state = {
      isLoading: true,
      category: navigation.state.params.category,
      list: []
    };
  }

  componentWillMount() {

    new Communication().getRecipes(this.state.category, result => this._insertItems(result));

  }

  render() {
    if (this.state.isLoading) {
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
          data={this.state.list}
          numColumns={2}
          initialNumToRender={6}
          renderItem={({item}) => this._renderItem(item)}
          removeClippedSubviews
        />

      </View>
    );
  }

  _renderItem(item) {
    return <RecipeItem name={item.name} img={item.image} onpress={() => this.props.navigation.navigate('RecipeDetail', { recipe: item })}/>
  }

  _insertItems(list) {
    this.setState({
      isLoading: false,
      list: list
    });
  }

  async _getRecipes(url) {

    try {
      var response = await fetch(url);

      this.setState({
        isLoading: false,
        list: await response.json()
      });

    }catch(e) {
      console.log(e.message);
    }

  }
}

class RecipeItem extends React.PureComponent {


  render() {

    return(
      <TouchableOpacity  style={styles.recipe} onPress={this.props.onpress}>

        <Image source={{ uri: this.props.img }} style={styles.recipeImage}/>

        <View style={styles.recipeLegende}>

          <Text style={styles.recipeText}>{this.props.name}</Text>

        </View>

      </TouchableOpacity>
    );
  }
}

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
