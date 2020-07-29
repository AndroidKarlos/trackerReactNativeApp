
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Store} from './src/store';
import HeadlessTask from './src/headlessJS/headlessJS';


AppRegistry.registerHeadlessTask('Tracker', () => HeadlessTask);
AppRegistry.registerComponent(appName, () => App);
