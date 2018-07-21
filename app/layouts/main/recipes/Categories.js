/**
 * List all the categories of recipes available in the application.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';
import { Header } from '../Components';
import { TouchableOpacity, StyleSheet, FlatList, Image, View, Text } from 'react-native';

import { Categories } from './CategoriesInfo';

export default class Category extends React.Component {

  /**
   * @constructor Category
   * Declaring and initializing properties.
   *
   * @param {object} props
   */
  constructor(props) {
    super(props)

    // State initialization
    this.state = {
      list: Categories
    }

  }

  render() {
    const { list } = this.state;

    // Template of screen
    return(
      <View style={styles.container}>

        <Header>Categorias</Header>

        <FlatList
          data={list}
          renderItem={({item}) => this._renderItem(item)}
        />

      </View>
    );
  }

  _renderItem(item) {
    return <CategoryItem title={item.name} src={item.image} event={() => this.props.navigation.navigate('Recipes', { category: item.event })}/>
  }
}

const CategoryItem = ({title, src, event}) => (
  <TouchableOpacity style={styles.item} onPress={event}>

    <Image source={src} style={styles.itemImage}/>

    <View style={styles.itemLegende}>

      <Text style={styles.itemText}>{title}</Text>

    </View>

  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },

  item: {
    height: 200,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginTop: 2.5,
    marginLeft: 5,
    marginBottom: 2.5,
    marginRight: 5,
    elevation: 3,
    borderRadius: 5
  },
  itemImage: {
    borderRadius: 5,
    height: '100%',
    width: '100%'
  },
  itemLegende: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba( 0, 0, 0, .3)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba( 255, 255, 255, 0.8)'
  }
});
