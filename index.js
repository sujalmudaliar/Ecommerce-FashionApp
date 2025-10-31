/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import App from './App';
import { name as appName } from './app.json';

// Opt-in to native screens (registers native view managers used by navigation)
// Must be called before any navigation or screen components are mounted.
enableScreens();

AppRegistry.registerComponent(appName, () => App);
