/**
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';
import Account from './Account';
import { AsyncStorage } from 'react-native';
import { Log } from './Log';

export default class Communication {

  constructor(address, port) {

    this.props = {
      address: `${address}:${port}`,
      path: {
        recipes: '/recipes',
        login: '/login'
      },
      query: {
        category: '?category='
      },
      method: ['GET', 'POST']
    };

  }

  _HTTPprotocol(numMethod, options, body) {

    if(typeof(numMethod) == 'number') {

      let protocol = {
        method: this.props.method[numMethod],
        headers: {
          'User-Agent': 'HeyCeitas 1.0v'
        }
      };

      if(typeof(options) == 'object') {
        protocol.headers['User-Agent'].concat(options);
      }

      if(typeof(body) == 'string'){
        protocol.concat({ body: body });
      }

      return protocol;

    }

  }

  async login(account, callback) {

    try {

      const url = `${this.props.address}${this.props.path.login}`;
      Log.ok(Log.OBJ_COMUNIC, `(fetch) url: ${url}`);

      account = Account.toString(account);

      //const protocol = {
      //  method: this.props.method[1], //method POST
      //  headers: {
      //    'accept': 'application/json',
      //    'content-type': 'application/json'
      //  },
      //  body: account
      //};

      const protocol = this._HTTPprotocol(1, undefined, { body: account });
      Log.ok(Log.OBJ_COMUNIC, `(fetch) HTTP protocol: ${JSON.stringify(protocol)}`);

      let response = await fetch(url, protocol);

      if(response.ok) {

        // Received 200 OK Status Code.
        let success = await response.json();
        if(typeof(callback) == 'function') callback(success);

      }else {

        Log.ok(Log.OBJ_COMUNIC, `(fetch) failed: ${response.status} (Status-Code)`);

      }

    }catch(err) {

      Log.err(Log.OBJ_COMUNIC, `(fetch) error: ${err}`);

    }

  }


  async getRecipes(category, callback) {
    // Destructuring
    const { OBJ_COMUNIC } = Log;

    Log.ok(OBJ_COMUNIC, `category: ${category}`);

    try {

      const url = `${this.props.address}${this.props.path.recipes}${this.props.query.category}${category}`;
      Log.ok(OBJ_COMUNIC, `(fetch) url: ${url}`);

      //const protocol = {
      //  method: this.props.method[0], // method GET
      //  headers: {
      //    Accept: 'application/json',
      //    'Content-Type': 'application/json',
      //    'User-Agent': 'HEYceitas 1.0v'
      //    'Authorization': JSON.parse(account).idToken
      //  }
      //};

      const protocol = this._HTTPprotocol(0, { Accept: 'application/json', 'Content-Type': 'application/json' });
      Log.ok(OBJ_COMUNIC, `(fetch) HTTP protocol: ${JSON.stringify(protocol)}`);

      let response     = await fetch(url, protocol);
      let responseJSON = await response.json();

      callback(responseJSON);
      Log.err(OBJ_COMUNIC, `(fetch) success: ${responseJSON.length}`);

    }catch(err) {

      callback(null, err.message);
      Log.err(OBJ_COMUNIC, `(fetch) error: ${err}`);

    }
  }

}
