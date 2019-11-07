import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import CustomTopBar from './CustomTopBar';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#bbbbbb',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Profile page</Text>
        <CustomTopBar />
      </View>
    );
  }
}
