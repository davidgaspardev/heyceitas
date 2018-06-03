import React from 'react';
import { TouchableOpacity, ActivityIndicator, Dimensions, StyleSheet, FlatList, Image, View, Text } from 'react-native';

export default class Recipes extends React.Component {

  constructor(props) {
    super(props)

    const { navigation } = this.props;

    this.state = {
      isLoading: true,
      category: navigation.state.params.category,
      list: []
    }
  }

  componentWillMount() {

    this._getRecipes('http://18.222.51.173:8080/recipes?category=' + this.state.category)

  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Image source={require('../../../images/gif/loading.gif')}
          style={{
            width: 200,
            height: 150
          }}/>
        </View>
      )
    }


    return (
      <View style={styles.container}>

        <FlatList
          data={this.state.list}
          numColumns={2}
          renderItem={({item}) => <RecipeItem
            img={item.image}
            name={item.name}
            onpress={() => this.props.navigation.navigate('RecipeDetail', { recipe: item }) }
          />}
          keyExtractor={({item, index}) => index}
        />

      </View>
    )
  }

  async _getRecipes(url) {

    try {
      var response = await fetch(url);

      this.setState({
        isLoading: false,
        list: await response.json()
      })

    }catch(e) {
      console.log(e.message);
    }

  }
}

class RecipeItem extends React.Component {


  render() {

    return(
      <TouchableOpacity  style={styles.recipe} onPress={this.props.onpress}>

        <Image source={{ uri: this.props.img }} style={styles.recipeImage}/>

        <View style={styles.recipeLegende}>

          <Text style={styles.recipeText}>{this.props.name}</Text>

        </View>

      </TouchableOpacity>
    )
  }
}

const { width } = Dimensions.get('window')

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
    flex: 1
  },
  recipeLegende: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba( 0, 0, 0, .3)',
    justifyContent: 'center'
  },
  recipeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17,
    padding: 5,
    textAlign: 'center'
  }
});
