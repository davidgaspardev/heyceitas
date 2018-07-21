/**
 * Components to be used in the Home screen.
 *
 * @author davidgaspar.dev@gmail.com
 * @file Components.js - ECMAScript 2015
 */

import React from 'react';
import { StyleSheet, FlatList, Image, View, Text } from 'react-native';

const Item = ({isFavorite, img, name}) => {

    if(isFavorite) {

      // Return JSX
      return (
        <View style={styles.favoritesItemContainer}>

          <Image source={{ uri: img }} style={{ flex: 1, borderRadius: 5 }} />

          <View style={styles.favoritesItemOpacity}>

            <Text style={styles.favoritesItemText}>{name}</Text>

          </View>

        </View>
      );
    }

    // Return JSX
    return (
      <View style={styles.historicItemContainer}>

        <Image source={img} style={{

          // To set flex to a static image, you must first assign the undefined value to the dimensions.
          width: undefined,
          height: undefined,
          flex: 1
        }}/>

      </View>
    );
}

const Favorites = ({ favorites }) => (
  <View style={styles.favoritesContainer}>

    <FlatList
      horizontal={true}
      data={favorites}
      renderItem={({item, index}) => <Item hey={index} isFavorite={true} img={item.image} name={item.name} />}
      keyExtracter={(item, index) => index}
    />

  </View>
);

const Historic = () => {
  let dataHERE = [
    {"image": require('../../../images/categories/brazilian.jpg')},
    {"image": require('../../../images/categories/candy.jpg')},
    {"image": require('../../../images/categories/chicken.jpg')},
    {"image": require('../../../images/categories/french.jpg')}
  ]

  // Return JSX
  return (
    <View style={styles.historicContainer}>

      <Text style={{padding:7.5}}>BUSCAS RECENTES</Text>

      <FlatList
        horizontal={true}
        data={dataHERE}
        renderItem={({item, index})=> <Item key={index} isFavorite={false} img={item.image}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  // Favorites style:
  favoritesContainer:{
    flex: 1
  },
  favoritesItemContainer: {
    width: 300,
    height: '100%',
    padding: 5
  },
  favoritesItemOpacity: {
    position: 'absolute',
    top: 5,
    right: 5,
    bottom: 5,
    left: 5,
    backgroundColor: 'rgba( 0, 0, 0, .3)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoritesItemText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgba( 255, 255, 255, .8)',
    textAlign: 'center'
  },

  // Historic style:
  historicContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  historicItemContainer: {
    width: 125,
    height: '100%'
  }
});

export { Favorites, Historic };
