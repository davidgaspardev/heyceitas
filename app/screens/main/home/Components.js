/**
 * Components to be used in the Home screen.
 *
 * @author davidgaspar.dev@gmail.com
 * @file Components.js - ECMAScript 2015
 */

import React from 'react';
import { StyleSheet, FlatList, Image, View, Text } from 'react-native';

class Item extends React.Component {
  render(){
    if(this.props.isFavorite) {
      return (
        <View style={{
          width:300,
          height:'100%',
          margin:5,
          backgroundColor:'white',
          alignItems:'center',
          paddingTop:5,
          paddingLeft:2.5,
          paddingBottom:5,
          paddingRight:2.5
        }}>

          <Image style={{width:'100%', height:'100%',borderRadius:5}} source={this.props.img}/>

          <View style={{
            position:'absolute',
            left:2.5,
            right:2.5,
            top:5,
            bottom:5,
            alignItems:'center',
            justifyContent:'center',
            borderRadius:5,
            backgroundColor:'rgba(0,0,0,.3)'
          }}>

            <Text style= {styles.name}>{this.props.recipename}</Text>

          </View>

      </View>
      )
    }

    return (

      <View style={{
        width:130,
        height:'100%',
        margin:2.5,
        backgroundColor:'white',
        alignItems:'center',
        paddingTop:0,
        paddingLeft:2.5,
        paddingBottom:5,
        paddingRight:2.5
      }}>

       <Image   source={this.props.img}
         style={{
           width:'100%',
           height:'100%',
           borderRadius:5
         }}
       />

       <View style={{
         position:'absolute',
         left:0.5,
         right:0.5,
         top:0,
         bottom:5,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:5,
         backgroundColor:'rgba(0,0,0,.3)'
       }}>

         <Text style= {styles.name}>{this.props.recipename}</Text>

       </View>

    </View>
    )
  }
}

class Favorites extends React.Component {
  render(){
    let dataHERE = [
      {"image": require('../../../images/category/brazilian.jpg'), "name":"Brasileiras"},
      {"image": require('../../../images/category/candy.jpg'), "name":"Doces"},
      {"image": require('../../../images/category/chicken.jpg'), "name":"Frango"},
      {"image": require('../../../images/category/french.jpg'),"name":"Francesa"},
      {"image": require('../../../images/category/italian.jpg'),"name":"Italiana"},
      {"image": require('../../../images/category/juices.jpg'),"name":"Sucos"},
      {"image": require('../../../images/category/meat.jpg'),"name":"Carnes"},
      {"image": require('../../../images/category/pastas.jpg'),"name":"Massas"},
      {"image": require('../../../images/category/practices.jpg'),"name":"Práticas"},
      {"image": require('../../../images/category/salty_fit.jpg'),"name":"Salgados Fit"},
      {"image": require('../../../images/category/salty_vegan.jpg'),"name":"Salgados Vegano"},
      {"image": require('../../../images/category/soups.jpg'),"name":"Sopas"},
      {"image": require('../../../images/category/sweet_fit.jpg'),"name":"Doces Fit"},
      {"image": require('../../../images/category/sweet_vegan.jpg'),"name":"Doces Vegano"},
      {"image": require('../../../images/category/vegetarian.jpg'),"name":"Vegetariana"}
    ]

    return(
    <View style={styles.favorites}>

      <FlatList
        horizontal={true}
        data={dataHERE}
        renderItem={({item})=> <Item isFavorite={true} img={item.image} recipename={item.name}/>}
      />

    </View>
    );
  }
}

class RecentSearched extends React.Component {
  render () {
    let dataHERE = [
      {"image": require('../../../images/category/brazilian.jpg')},
      {"image": require('../../../images/category/candy.jpg')},
      {"image": require('../../../images/category/chicken.jpg')},
      {"image": require('../../../images/category/french.jpg')}
    ]
    return (
      <View style={styles.recentsearched}>
      <FlatList
      horizontal={true}
      data={dataHERE}
      renderItem={({item})=> <Item isFavorite={false} img={item.image}/>}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  favorites:{
    flex:2,
    marginTop:-20
  },
  name: {
    fontSize:26,
    fontWeight:'bold',
    color:'white'
  },
  recentsearched: {
    flex:3,
    marginBottom:-20
  }
});

export { Favorites, RecentSearched };
