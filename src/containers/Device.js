import React, { Component } from "react";
import { View, Text, Button, ScrollView, StyleSheet, TextInput } from "react-native";
import { connect } from 'react-redux'
import { removeDevice } from '../actions';
import HeaderRightButton from '../components/Device/HeaderRightButton';

import Reactotron from 'reactotron-react-native'

class Device extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceId: this.props.navigation.getParam('deviceId'),
      deviceName: this.props.navigation.getParam('deviceName')
    }
    this.props.navigation.setParams({ onClickRemoveDevice: this._onClickRemoveDeviceHandler });
  }

  _onClickRemoveDeviceHandler = () => {
    this.props.dispatchRemoveDevice(this.state.deviceId);
    this.props.navigation.navigate('MyDesk');
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    Reactotron.log(params);
    return {
      title: params.deviceName + ' (#' + params.deviceId + ')',
      headerRight: <HeaderRightButton onClick={() => params.onClickRemoveDevice()} />,
      headerStyle: {
        borderBottomColor: '#d0d0d0', borderBottomWidth: 1,
      }
    }
  };

  render() {
    return (<View style={styles.container} >
      <ScrollView>
        <Text>Device pics</Text>
      </ScrollView>
    </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    margin: 5,
    padding: 5,
    fontSize: 20,
    width: 300,
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1
  }
});

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchRemoveDevice: (deviceId) => dispatch(removeDevice(deviceId))
  }
}

export default containerAddDevice = connect(
  mapStateToProps,
  mapDispatchToProps
)(Device)