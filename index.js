/**
 * @format
 */

//import * as firebase from 'firebase';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/* Initialize Firebase
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);*/



AppRegistry.registerComponent(appName, () => App);

