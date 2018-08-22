import React, { Component } from "react";
import { View, Text, Button, ScrollView, StyleSheet, TextInput } from "react-native";
import { connect } from 'react-redux'
import { addNewDevice } from '../actions';

import Reactotron from 'reactotron-react-native'

class AddDevice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deviceId: '',
      deviceName: ''
    }
  }

  onClickAddButtonHandler = () => {
    this.props.dispatchAddNewDevice(this.state.deviceId, this.state.deviceName);
    this.props.navigation.goBack();
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Add New Device',
      headerStyle: {
        backgroundColor: "#ffffff", borderBottomColor: '#d0d0d0', borderBottomWidth: 1,
      },
      headerTintColor: 'black'
    }
  };

  render() {
    return (<View style={styles.container} >
      <ScrollView>
        <Text>Type here Name and new Memo Device ID</Text>
        <TextInput style={styles.textInput} onChangeText={deviceId => this.setState({ deviceId })} value={this.state.deviceId} placeholder='ABC-123-XYZ...' />
        <TextInput style={styles.textInput} onChangeText={deviceName => this.setState({ deviceName })} value={this.state.deviceName} placeholder='Kate`s Memo' />
        <Button onPress={this.onClickAddButtonHandler} title='ADD' />
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
    dispatchAddNewDevice: (deviceId, deviceName) => dispatch(addNewDevice(deviceId, deviceName))
  }
}

export default containerAddDevice = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDevice)