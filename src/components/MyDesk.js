import React, { Component } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

import HeaderRightButton from './MyDesk/HeaderRightButton';
import IconLeft from 'react-native-vector-icons/FontAwesome';

import Reactotron from 'reactotron-react-native'

export default class MyDesk extends Component {
  constructor(props) {
    super(props);
    this.props.navigation.setParams({ onClickAddDevice: this._onClickAddDeviceHandler });
  }

  _onClickAddDeviceHandler = () => {
    this.props.navigation.navigate('AddDevice');
  }

  _onClickDeviceListHandler = (deviceId, deviceName) => {
    this.props.navigation.navigate('Device', { deviceId, deviceName });
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Memo Desk',
      headerRight: <HeaderRightButton onClick={() => params.onClickAddDevice()} />,
      headerStyle: {
        borderBottomColor: '#d0d0d0', borderBottomWidth: 1,
      }
    }
  };

  render() {
    if (this.props.data.devices.length > 0) {
      return (<View style={styles.container}>
        <ScrollView>
          {
            this.props.data.devices.map((i, index) => {
              return (<TouchableOpacity onPress={() => this._onClickDeviceListHandler(i.deviceId, i.deviceName)}>
                <View style={styles.item}><Text style={styles.itemText}>{i.deviceName}</Text></View></TouchableOpacity>);
            })
          }
        </ScrollView>
      </View>);
    } else {
      return (
        <View style={styles.container}>
          <ScrollView>
            <Text>Device list is empty!</Text>
          </ScrollView>
        </View>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    borderBottomWidth: 1,
    borderBottomColor: '#c2c2c2',
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'white'
  },
  itemText: {
    fontSize: 20
  }
});