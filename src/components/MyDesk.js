import React, { Component } from "react";
import { View, Text, FlatList, ScrollView, StyleSheet } from "react-native";

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

  _onClickDeviceListHandler = (deviceId) => {
    alert(deviceId);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Memo Desk',
      headerRight: <HeaderRightButton onClick={() => params.onClickAddDevice()} />,
      headerStyle: {
        backgroundColor: "#ffffff", borderBottomColor: '#d0d0d0', borderBottomWidth: 2,
      },
      headerTintColor: 'black'
    }
  };

  render() {
    if (this.props.data.devices.length > 0) {
      return (<View style={styles.container}>
        <ScrollView>
          {
            this.props.data.devices.map((i, index) => {
              return <Text>{i.deviceName} </Text>;
            })
          }
        </ScrollView>
      </View>);
    } else {
      return
      <View style={styles.container}>
        <ScrollView>
          <Text>Device list is empty!</Text>
        </ScrollView>
      </View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});