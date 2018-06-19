/**
 * @author raul.r.ze@hotmail.com (Raul Zeferino)
 */
import React from 'react';
import { StyleSheet, View, Text,Image,TouchableOpacity } from 'react-native';

export default class Settings extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Profile/>
      </View>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
    <View style={styles.container}>
    <Image style={styles.image} source={{uri:this.props.image}}/>
    <View style={styles.username}>
    <Text style={styles.text}>{this.props.name}</Text>
    </View>
    <View style={styles.email}>
    <Text style={styles.text}>{this.props.email}</Text>
    </View>
    <TouchableOpacity style={styles.logout}><Text style={styles.text}>Logout</Text></TouchableOpacity>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    height:150,
    width:150,
    borderRadius:75
  },
  text: {
    fontSize:18,
    color:'white'
  },
  username: {
    backgroundColor: '#952115',
    borderRadius:5,
    padding:5,
    margin:10
  },
  email: {
    backgroundColor: '#952115',
    borderRadius:5,
    padding:5,
    margin:10
  },
  logout: {
    backgroundColor: '#952115',
    borderRadius:5,
    padding:10,
    position:'absolute',
    bottom:10
  }
});
