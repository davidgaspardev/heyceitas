import React from 'react';
import { StyleSheet, View, Text,Image, FlatList } from 'react-native';

export default class Home extends React.Component {

  constructor(props) {
    super(props);
  }
  //<Image source={require(../../../images/logo/logo.png)} style={{width:150, height:50}}/>
  render() {
    return (
      <View style={styles.container}>
        <Favorites/>
        <View style={styles.footer}>
        <Text>BUSCAS RECENTES></Text>
      </View>
      </View>
    );
  }
}

class Favorites extends React.Component {
  render(){
    let dataHERE = [{"name":"teste1"},{"name":"teste2"},{"name":"teste3"},{"name":"teste4"},{"name":"teste5"},{"name":"teste6"},{"name":"teste7"},{"name":"teste8"},{"name":"teste9"},{"name":"teste10"}]

    return(
    <View style={styles.favorites}>
    <FlatList
    horizontal={true}
    data={dataHERE}
    renderItem={({item})=> <Text style={styles.text}>{item.name}</Text>}
    />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  favorites:{
    flex:3,
backgroundColor:'#FCFCFC'
  },
footer: {
  flex:2,
  borderTopWidth:1,
  borderTopColor:'#999999',
  marginLeft:5,
  marginRight:5,
  padding:5,
  alignSelf:'stretch',
  backgroundColor:'#FCFCFC'
},
icon:{
  width:24,
  height:24
},
text: {
  fontSize:30,
  padding:30
}
});
