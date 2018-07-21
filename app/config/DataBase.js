/**
 * Class to communication with the database.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import Mongo from 'react-native-local-mongodb'
import { Log } from './Log'

export default class DataBase {

  /**
   * @constructs
   *
   * @param {string} filename
   */
  constructor(filename) {

    this.props = {
      db: new Mongo({filename: filename, autoload: true }),
      filename: filename
    };

    //this.props.db.loadDatabase((err) => {
    //  if(err) {
    //    Log.err(Log.OBJ_DB, `(loadDatabase) error: ${err}`);
    //    throw err;
    //  }
    //});

  }

  /**
   * To get all the data stored in MongoDB.
   *
   * @param {function} callback
   */
  getDatas(callback) {

    //Destructuring
    const { db, filename } = this.props;
    const { OBJ_DB } = Log;

    db.persistence.compactDatafile;

    db.find({}, (err, docs) => {

      // Order by index element
      docs = docs.sort((a, b) => a.date - b.date);
      Log.ok(OBJ_DB, `${filename} | datas: ${docs.length}`);

      // Reload list to tha Pantry Screen
      if(typeof(callback) == 'function') callback(docs);

    });

  }

  /**
   * To store data in MongoDB.
   *
   * @param {object} doc
   * @param {function} callback
   */
  setData(doc, callback) {

    // Destructuring
    const { db, filename } = this.props;

    // Count all documents in the datastore
    db.count({}, (err, count) => {
      if(err) {
        Log.err(Log.OBJ_DB, `${filename} | (count) error: ${err}`);
        throw err;
      }

      doc.date = new Date();

      db.insert(doc, (err) => {

        if(err) {
          Log.err(Log.OBJ_DB, `${filename} | (insert) error: ${err}`);
          throw err;
        }

        // Reload list to the Pantry Screen
        if(typeof(callback) == 'function'){

          this.getDatas(callback);

          db.persistence.compactDatafile;

        }

      });

    });

  }

  /**
   * Check if you have stored data in MongoDB.
   *
   * @param {object} doc
   * @param {function} callback
   */
  hasData(doc, callback) {

    // Destructuring
    const { db, filename } = this.props;

    if(doc != null) {

      db.find({ _id: doc._id }, (err, docs) => {

        if(err) {
          Log.err(Log.OBJ_DB, `${filename} | (MongoDB) find method error: ${err}`);
          throw err;
        }

        if(docs == '') {

          callback(false);

        }else {

          Log.err(Log.OBJ_DB, `${filename} | (MongoDB) find success: ${docs.length} docs`);

          callback(true);
        }

      });

    }else {

      db.find({}, (err, docs) => {

        if(err) {
          Log.err(Log.OBJ_DB, `${filename} | (MongoDB) find method error: ${err}`);
          throw err;
        }

        if(docs == '') {

          callback(false);

        }else {

          Log.ok(Log.OBJ_DB, `${filename} | (MongoDB) find success: ${docs.length}`);

          callback(true);
        }

      });

    }

  }

  /**
   * To remove data in MongoDB.
   *
   * @param {object} doc
   * @param {function} callback
   */
  setRemove(doc, callback) {
    // Destructuring
    const { db, filename } = this.props;

    let docRef;

    if(typeof(doc) != 'object') {
      docRef = {};
    }else{
      docRef = { _id: doc._id };
    }

    //this.props.db.remove(doc, { multi: true }, (err) => {
    db.remove(docRef, { multi: true },(err) => {
      if(err) {
        Log.ok(Log.OBJ_DB, `${filename} | (remove) error: ${err}`);
        throw err;
      }

      if(typeof(callback) == 'function') {
        callback();
      }

    });

  }

}
