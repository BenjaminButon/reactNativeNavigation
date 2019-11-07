import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {inherits} from 'util';

interface IProps {
  componentId: string;
}

const tab2 = {
  icon: require('../assets/ic_tab_home.png'),
  selectedIconColor: 'red',
};
export default class Tab2Screen extends Component<IProps> {
  render() {
    return (
      <View style={{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
        <Text>Tab 2</Text>
        <TouchableOpacity
          style={{
            borderColor: 'blue',
            borderRadius: 3,
            height: 50,
            width: 100,
          }}
          onPress={() => {
            Navigation.push(this.props.componentId, {
              component: {
                name: 'ProfileScreen',
                options: {
                  bottomTab: {...tab2},
                  topBar: {
                    background: {
                      color: 'black',
                    },
                    title: {
                      text: 'Profile Page',
                      color: 'white',
                    },
                    backButton: {
                      icon: require('../assets/great_coach_small.png'),
                      color: 'white',
                    },
                  },
                },
              },
            });
          }}>
          <Text>Go to profile page</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
