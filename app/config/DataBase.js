/**
 * Class to communication with the database.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import Mongo from 'react-native-local-mongodb'
import { LOG_TAG_OK, LOG_TAG_ER, OBJ_DB } from './Log'

export default class DataBase {

  /** @constructs DataBase: Start object with favorite as filename to the data base */
  constructor(filename) {

    this.props = {
      db: new Mongo({filename: filename})
    };

    this.props.db.loadDatabase((err) => {
      if(err) {
        LOG_TAG_ER(OBJ_DB, `(loadDatabase) error: ${err}`);
        throw err;
      }

    });

  }

  getDatas(callback) {

    this.props.db.find({}, (err, docs) => {
    /**
      * @param docs: type BJSON.
      */

      // Order by index element
      docs = docs.sort((a, b) => a.date - b.date);
      LOG_TAG_OK(OBJ_DB, `datas: ${JSON.stringify(docs)}`);

      // Reload list to tha Pantry Screen
      if(typeof(callback) == 'function') callback(docs);

    });

  }

  setData(doc, callback) {
    const { db } = this.props;

    // Count all documents in the datastore
    db.count({}, (err, count) => {
      if(err) {
        LOG_TAG_ER(OBJ_DB, `(count) error: ${err}`);
        throw err;
      }

      doc.date = new Date();

      db.insert(doc, (err) => {

        if(err) {
          LOG_TAG_ER(OBJ_DB, `(insert) error: ${err}`);
          throw err;
        }

        // Reload list to the Pantry Screen
        if(typeof(callback) == 'function'){

          this.getDatas(callback);

        }

      });

    });

  }

  hasData(doc, callback) {
    const { db } = this.props;
    if(doc != null) {
      db.find({ _id: doc._id }, (err, docs) => {
        /**
         * @params docs
         * @type object
         */
        if(err) {
          LOG_TAG_ER(OBJ_DB, `(MongoDB) find method error: ${err}`);
          throw err;
        }

        if(docs == '') {

          callback(false);

        }else {

          LOG_TAG_OK(OBJ_DB, `(MongoDB) find success: ${JSON.stringify(docs)}`);

          callback(true);
        }
      });

    }else {

      db.find({}, (err, docs) => {
        /**
         * @params docs
         * @type object
         */
        if(err) {
          LOG_TAG_ER(OBJ_DB, `(MongoDB) find method error: ${err}`);
          throw err;
        }

        if(docs == '') {

          callback(false);

        }else {

          LOG_TAG_OK(OBJ_DB, `(MongoDB) find success: ${JSON.stringify(docs)}`);

          callback(true);
        }
      });

    }

  }

  setRemove(doc, callback) {
    const { db } = this.props;

    let docRef;

    if(typeof(doc) != 'object') {
      docRef = {};
    }else{
      docRef = { _id: doc._id };
    }

    //this.props.db.remove(doc, { multi: true }, (err) => {
    db.remove(docRef, { multi: true },(err) => {
      if(err) {
        LOG_TAG_OK(OBJ_DB, `(remove) error: ${err}`);
        throw err;
      }

      if(typeof(callback) == 'function') {
        callback();
      }

    });

  }

}
