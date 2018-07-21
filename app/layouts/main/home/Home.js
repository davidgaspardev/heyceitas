/**
 * @author davidgaspar@gmail.com (David Gaspar)
 */
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Header } from '../Components';
import { Favorites, Historic } from './Components';
import { Log } from '../../../config/Log';
import DataBase from '../../../config/DataBase';


export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      db: [ new DataBase('recipes'), new DataBase('hitoric') ],
      favorites: null,
      historic: null
    }

  }

  componentWillMount() {

    const { db } = this.state;

    db[0].getDatas(docs => {
    docs = docs.sort((a, b) => b.date - a.date);
      this.setState({ favorites: docs });
    });
    db[1].getDatas(docs => {
      docs = docs.sort((a, b) => b.date - a.date);
      this.setState({ historic: docs });
    });

  }

  render() {

    // Destructuring
    const { favorites, historic } = this.state;
    const { HOME_LAYOUT } = Log;

    // Return JSX
    return (
      <View style={[styles.container]}>

        <Header size={45} >HeyCeitas</Header>

        <Favorites favorites={favorites} />

        <Historic historic={historic}/>

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
