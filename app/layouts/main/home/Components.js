/**
 * Components to be used in the Home screen.
 *
 * @author davidgaspar.dev@gmail.com
 * @file Components.js - ECMAScript 2015
 */

import React from 'react';
import DataBase from '../../../config/DataBase';
import { StyleSheet, FlatList, Image, View, Text } from 'react-native';

const Item = ({isFavorite, img, name}) => {

    if(isFavorite) {

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

          <Image style={{width:'100%', height:'100%',borderRadius:5}} source={{ uri: img}}/>

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

            <Text style= {styles.name}>{name}</Text>

          </View>

      </View>
    );
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

       <Image   source={img}
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

         <Text style= {styles.name}>{name}</Text>

       </View>

    </View>
  );
}

class Favorites extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      db: new DataBase('recipes'),
      favorites: []
    }
  }

  componentWillMount() {
    const { db, favorites } = this.state;

    db.getDatas((docs) => {

      console.log('here: ' + JSON.stringify(docs));

      docs = docs.sort((a, b) => b.date - a.date);

      if(docs != '' && docs != favorites) {
        this.setState({
          favorites: docs
        });
      }

    });

  }

  render(){
    const { favorites } = this.state;



    return(
    <View style={styles.favorites}>

      <FlatList
        horizontal={true}
        data={favorites}
        renderItem={({item})=> <Item isFavorite={true} img={item.image} recipename={item.name}/>}
      />

    </View>
    );
  }
}

class RecentSearched extends React.Component {
  render () {
    let dataHERE = [
      {"image": require('../../../images/categories/brazilian.jpg')},
      {"image": require('../../../images/categories/candy.jpg')},
      {"image": require('../../../images/categories/chicken.jpg')},
      {"image": require('../../../images/categories/french.jpg')}
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
