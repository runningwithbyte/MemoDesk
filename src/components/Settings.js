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
      title: 'Доставка и Оплата',
      headerLeft: null,
      headerRight: <Icon name='shopping-bag' size={20} style={{ paddingRight: 15 }} />,
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