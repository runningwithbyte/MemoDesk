import React, { Component } from "react";
import { View, Text, Button, ScrollView, StyleSheet } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import Reactotron from 'reactotron-react-native'

export default class Settings extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Settings',
      headerStyle: {
        backgroundColor: "#ffffff", borderBottomColor: '#d0d0d0', borderBottomWidth: 2,
      },
      headerTintColor: 'black'
    }
  };

  render() {
    return (<View style={styles.container} >
      <ScrollView>
        <Text>Settings</Text>
      </ScrollView>
    </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});