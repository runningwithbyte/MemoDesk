import React, { Component } from "react";
import { View, Text, Button, ScrollView, StyleSheet, Image } from "react-native";
import { connect } from 'react-redux'
import { removeDevice, requestGetPicsList } from '../actions';
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

  componentWillMount() {
    this.props.dispatchRequestGetPicsList(this.state.deviceId);
  }

  _onClickRemoveDeviceHandler = () => {
    this.props.dispatchRemoveDevice(this.state.deviceId);
    this.props.navigation.navigate('MyDesk');
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: params.deviceName + ' (#' + params.deviceId + ')',
      headerRight: <HeaderRightButton onClick={() => params.onClickRemoveDevice()} />,
      headerStyle: {
        borderBottomColor: '#d0d0d0', borderBottomWidth: 1,
      }
    }
  };

  render() {
    const index = this.props.data.devices.findIndex(item => item.deviceId === this.state.deviceId);
    if (index == -1) {
      return <Text>No one picture added!</Text>;
    }
    if (this.props.data.devices[index].fileList) {
      return (
        <View style={styles.container} >
          <ScrollView>
            {this.props.data.devices[index].fileList.map((item, index) => {
              return (<View><Image
                style={{ height: 350, width: 350 }}
                source={{ uri: 'http://138.68.44.49/devices/' + this.state.deviceId + '/' + item.picName }}
              /><Text></Text></View>);
            })}
          </ScrollView>
        </View>
      );
    } else {
      return (
        <View style={styles.container} >
          <ScrollView>
            <Text>No one picture added!</Text>
          </ScrollView>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    flex: 1, width: null, height: null
  },
});

const mapStateToProps = state => {
  return { ...state }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchRemoveDevice: (deviceId) => dispatch(removeDevice(deviceId)),
    dispatchRequestGetPicsList: (deviceId) => dispatch(requestGetPicsList(deviceId))
  }
}

export default containerAddDevice = connect(
  mapStateToProps,
  mapDispatchToProps
)(Device)