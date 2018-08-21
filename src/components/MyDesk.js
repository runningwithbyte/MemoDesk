import React, { Component } from "react";
import { View, Text, StatusBar, ScrollView, StyleSheet } from "react-native";

import IconRight from 'react-native-vector-icons/FontAwesome';
import IconLeft from 'react-native-vector-icons/FontAwesome';

import Reactotron from 'reactotron-react-native'

export default class MyDesk extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: 'Memo Desk',
      headerLeft: <IconLeft name='commenting' size={20} style={{ paddingLeft: 15 }} />,
      headerRight: <IconRight name='shopping-bag' size={20} style={{ paddingRight: 15 }} />,
      headerStyle: {
        backgroundColor: "#ffffff", borderBottomColor: '#d0d0d0', borderBottomWidth: 2,
      },
      headerTintColor: 'black'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text>MyDesk</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
});