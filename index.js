import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import {Store} from './src/store';
import HeadlessTask from './src/headlessJS/headlessJS';

const RNRedux = () => (
  <Provider store={Store}>
    <App />
  </Provider>
);

AppRegistry.registerHeadlessTask('Tracker', () => HeadlessTask);
AppRegistry.registerComponent(appName, () => RNRedux);
