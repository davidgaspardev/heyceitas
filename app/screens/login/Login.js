import React from 'react';
import { TouchableOpacity, Dimesions,  StyleSheet, Image, View } from 'react-native';

export default class Login extends React.Component {

  render() {

    return(
      <View style={styles.container}>
        <Image source={require('../../images/login/background.png')} style={styles.background}/>

        <View style={styles.login}>

          <TouchableOpacity onPress={
            () => this.props.navigation.navigate('Logged')
          }>
            <Image source={require('../../images/login/facebook.png')} style={styles.buttonLogin} />
          </TouchableOpacity>

          <TouchableOpacity onPress={
            () => this.props.navigation.navigate('Logged')
          }>
            <Image source={require('../../images/login/google.png')} style={styles.buttonLogin} />
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  login: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba( 0, 0, 0, .3)'
  },
  buttonLogin: {
    width: 300,
    height: 50,
    margin: 10
  }
});
