import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

import { Favorites, RecentSearched } from './Components'

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, {paddingBottom:5}]}>

        <Image source={require('../../../images/logos/heyceitas.png')} style={styles.logo}/>

        <Favorites/>

        <View style={styles.footer}>

          <Text style={{padding:7.5}}>BUSCAS RECENTES></Text>

          <RecentSearched/>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  footer: {
    flex:2,
    borderTopWidth:1,
    borderTopColor:'#999999',
    alignSelf:'stretch',
    backgroundColor:'#FCFCFC'
  },
  logo:{
    height:60,
    width:200,
    margin:15
  }
});
