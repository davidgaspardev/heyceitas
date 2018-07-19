/**
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';
import { AsyncStorage } from 'react-native';
import { Log } from './Log'

export default class User {

  /**
   * @constructor
   * Declaring and initializing properties
   */
  constructor() {

    this.props = {
      ACCOUNT_KEY: '@ccount'
    }

  }

  /**
   * Convert input param to output string
   * @return string
   * @type string
   */
  static toString(variable) {

    let string = typeof(variable) == 'object' ? JSON.parse(variable) : variable;

    return string;
  }

  /**
   * Check if you have stored data with ACCOUNT_KEY key.
   *
   * @param callback
   * @type anonymous function (action)
   */
  async hasAccount(callback) {
    
    // Destructuring
    const { ACCOUNT_KEY } = this.props;

    try {

      // Getting stored data.
      let account = await AsyncStorage.getItem(ACCOUNT_KEY);

      if(account == null) {

        // No has stored data.
        callback(false);

      }else{

        // Has stored data.
        callback(true);

      }

    }catch(err) {

      // There was an error fetching the stored data.
      Log.err(Log.OBJ_ACCOUNT, `(AsyncStorage) hasAccount: ${err}`);

    }
  }

  /**
   * To insert account (Google/Facebook) to the database (AsyncStorage).
   *
   * @param {string} user
   * @param {function} callback
   */
  async setAccount(user, callback) {

    try {

      user = toString(variable);

      // Storing data.
      await AsyncStorage.setItem(this.props.ACCOUNT_KEY, user);
      Log.ok(Log.OBJ_ACCOUNT, `(AsyncStorage) added with success: ${user}`);

      // Start function.
      callback();

    }catch(err) {

      Log.err(Log.OBJ_ACCOUNT, `(AsyncStorage) setAccount: ${err}`);

    }
  }

  /**
   * To get the account (Google/Facebook) of the database (AsyncStorage).
   */
  async getAccount(callback) {

    this.hasAccount(result => {

      if(result) {

        // Has stored account
        try {

          // Getting stored data.
          let account = AsyncStorage.getItem(this.props.ACCOUNT_KEY);
          Log.ok(Log.OBJ_ACCOUNT, `(AsyncStorage) getAccount: ${toString(account)}`)

          // Returning stored data.
          callback(account);

        }catch(error) {

          // An error occurred while fetching the stored data.
          Log.err(Log.OBJ_ACCOUNT,  `(AsyncStorage) getAccount failed: ${error}`);

        }

      }else {

        // No has stored account
        Log.err(Log.OBJ_ACCOUNT, `Not has stored account`);

      }

    });

  }

}
