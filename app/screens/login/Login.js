/**
 *
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';
import Account from '../../config/Account';
import Communication from '../../config/Communication';
import { TouchableOpacity, Dimesions,  StyleSheet, AsyncStorage, Image, View } from 'react-native';

import { GoogleSignin } from 'react-native-google-signin';

export default class Login extends React.Component {

  /** @constructor */
  constructor(props) {
    super(props);

    this.state = {
      hasAccount: true,
      account: new Account(),
      communication: new Communication()
    };

    this._hasLogin();

  }

  _hasLogin() {

    this.state.account.hasAccount(res => {

      console.log("response: "+ res)

      if(res) {
        this.props.navigation.navigate('Logged');
      }

      this.setState({
        hasAccount: false
      });

    });

  }

  componentWillMount() {

    GoogleSignin.hasPlayServices({
      autoResolve: true
    });

    GoogleSignin.configure({
      webClientId: '635512216388-jj8fbcsp7lsujbfdrietb220g4s3ndlk.apps.googleusercontent.com'
    });

  }

  /** @return Native View (JSX)  */
  render() {

    if(this.state.hasAccount) {

      return(<View></View>);

    }

    return(
      <View style={styles.container}>
        <Image source={require('../../images/others/background.png')} style={styles.background}/>

        <View style={styles.login}>

          { /* Logo HEYceitas */ }
          <Image source={require('../../images/logos/logo.png')} style={styles.loginLogo}/>

          { /* Button to Facebook */ }
          <TouchableOpacity onPress={
            () => this.props.navigation.navigate('Logged')
          }>
            <Image source={require('../../images/others/facebook.png')} style={styles.loginButton} />
          </TouchableOpacity>

          { /* Button to Google */ }
          <TouchableOpacity onPress={
            //() => this.props.navigation.navigate('Logged')
            this.handleSigninGoogle.bind(this)
          }>
            <Image source={require('../../images/others/google.png')} style={styles.loginButton} />
          </TouchableOpacity>

        </View>

      </View>
    );
  }

  handleSigninGoogle() {
    GoogleSignin.signIn().then((accountG) => {

      this.state.communication.login(accountG, (account) => {

        this.state.account.setAccount(account,
          () => this.props.navigation.navigate('Logged')
        );

      });

    }).catch((err) => {

      console.log('WRONG SIGNIN', err)

    }).done();

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
  loginLogo: {
    width: 200,
    height: 154,
    marginBottom: 50
  },
  loginButton: {
    width: 270,
    height: 40,
    margin: 10,
    borderRadius: 5
  }
});
