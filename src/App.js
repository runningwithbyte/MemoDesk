import React, { Component } from 'react';
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'
import devToolsEnhancer from 'remote-redux-devtools';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage';

// icons
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// Main Tabs
import MyDeskScreen from './containers/containerMyDesk';
import AddDeviceScreen from './containers/AddDevice';
import DeviceScreen from './containers/Device';
import SettingsScreen from './containers/containerSettings';

import * as _const from './constants';

const MemoStackNavigator = createStackNavigator({
  MyDesk: MyDeskScreen,
  AddDevice: AddDeviceScreen,
  Device: DeviceScreen
},
  {
    initialRouteName: 'MyDesk',
    navigationOptions: {
      //headerTintColor: '#2a8dfc',
      headerBackTitle: 'Back',
    }
  });

const SettingsStackNavigator = createStackNavigator({
  Settings: SettingsScreen,
},
  {
    initialRouteName: 'Settings',
    navigationOptions: {
      //headerTintColor: '#2a8dfc',
      //headerBackTitle: ' ',
    }
  });

const TabNav = createBottomTabNavigator({
  MemoTab: {
    screen: MemoStackNavigator,
    navigationOptions: {
      tabBarLabel: "My Desk",
      tabBarIcon: ({ tintColor }) => (
        <IconIonicons name='ios-keypad' size={26} color={tintColor} />
      )
    }
  },
  SettingsTab: {
    screen: SettingsStackNavigator,
    navigationOptions: {
      tabBarLabel: "Settings",
      tabBarIcon: ({ tintColor }) => (
        <IconIonicons name='ios-settings' size={26} color={tintColor} />
      )
    }
  }
}, {
    initialRouteName: 'MemoTab',
    tabBarOptions: {
      activeTintColor: '#e30047',
      inactiveTintColor: '#181818',
      showLabel: false,
      style: {
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderTopColor: '#c2c2c2'
      },
    }
  });

const RootNavigatorStack = createStackNavigator({
  Tabs: TabNav,
},
  {
    initialRouteName: 'Tabs',
    navigationOptions: {
      header: null,
    }
  });

const persistConfig = { key: 'root', storage };

const pReducer = persistReducer(persistConfig, reducers);
const middlewareEnhancer = applyMiddleware(thunk);
const composedEnhancers = compose(middlewareEnhancer, devToolsEnhancer({
  name: Platform.OS, realtime: true,
  hostname: '138.197.192.122', port: 8000
}));

export const store = createStore(pReducer, undefined, composedEnhancers);
export const persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigatorStack />
      </PersistGate>
    </Provider>)
  }
}