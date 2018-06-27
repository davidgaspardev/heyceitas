/**
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';
import { AsyncStorage } from 'react-native';

import { LOG_TAG, OBJ_ACCOUNT } from './Log'

export default class User {

  /** @constructor */
  constructor() {

    this.props = {
      ACCOUNT_KEY: '@ccount'
    }

  }

  /**
   * Convert input param to output string
   * @return {string}
   */
  static toString(variable) {

    let string = typeof(variable) == 'object' ? JSON.parse(variable) : variable;

    return string;
  }

  /**
   * To check an account (Google/Facebook) in the database (AsyncStorage)
   */
  async hasAccount(callback) {

    try {

      let account = await AsyncStorage.getItem(this.props.ACCOUNT_KEY)

      if(account == null) {

        callback(false);

      }else{

        callback(true);
      }
    }catch(err) {

      LOG_TAG_ER(OBJ_ACCOUNT, `(AsyncStorage) hasAccount: ${err}`);

    }
  }

  /**
   * To insert account (Google/Facebook) to the database (AsyncStorage)
   */
  async setAccount(user, callback) {

    try {

      user = toString(variable);

      await AsyncStorage.setItem(this.props.ACCOUNT_KEY, user);
      LOG_TAG_OK(OBJ_ACCOUNT, `(AsyncStorage) added with success: ${user}`);

      callback();

    }catch(err) {

      LOG_TAG_ER(OBJ_ACCOUNT, `(AsyncStorage) setAccount: ${err}`);

    }
  }

  /**
   * To get the account (Google/Facebook) to the database (AsyncStorage)
   */
  async getAccount() {

    try {

      let account = AsyncStorage.getItem(this.props.ACCOUNT_KEY);
      LOG_TAG_OK(OBJ_ACCOUNT, `(AsyncStorage) getAccount: ${toString(account)}`)

      return account;

    }catch(err) {

    }

  }

}
