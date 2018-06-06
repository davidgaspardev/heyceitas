import React from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

export default class Pantry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ingredients: [{ name: "add" }]
    }

  }

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <FlatList
          data={this.state.ingredients}
          renderItem={({item}) => this._myIngredients(item) }
        />
      </View>
    );
  }

  _myIngredients(item) {
    if(item.name = "add") {
      //Button add ingredient
      return (<View></View>)
    }else {
      return (<View></View>)
    }
  }
}

class Header extends React.Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Armario</Text>
      </View>
    );
  }

}

class AddItem extends React.Component {

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  //Header
  header: {
    alignSelf: 'stretch',
    height: 48,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    fontFamily: 'umbrella',
    color: '#952115'
  }
});
