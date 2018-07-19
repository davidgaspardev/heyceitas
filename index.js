/** @format */
import { AppRegistry } from 'react-native';
import { name as AppName } from './app.json';
import App from './app/config/Route';

/**
 * Arrow function to start the App.
 * Contant
 */
const RunApp = () => App;

/**
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 *
 * AppRegistry is the JS entry point to running all React Native apps.
 * App root components should register themselves with AppRegistry.registerComponent,
 * then the native system can load the bundle for the app and then actually run the app
 * when it's ready by invoking AppRegistry.runApplication.
 *
 * @param {string} AppName
 * @param {function} RunApp
 */
AppRegistry.registerComponent(AppName, RunApp);
