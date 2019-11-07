import {View, Image, Text} from 'react-native';
import React, {Component} from 'react';

export default class TopBar extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          zIndex: 1000,
        }}>
        {/* <Text>GreatCoach</Text> */}
        <Image
          source={require('../assets/great_coach_header.png')}
          style={{resizeMode: 'contain', height: 12}}
        />
      </View>
    );
  }
}
