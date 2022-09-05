/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import User from './Screens/Users';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => User);
