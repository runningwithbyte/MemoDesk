import { AppRegistry } from 'react-native';
import App from './src/App';

import Reactotron from 'reactotron-react-native'

Reactotron
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect() // let's connect!

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: ', '']);
console.disableYellowBox = true;

AppRegistry.registerComponent('MemoDesk', () => App);