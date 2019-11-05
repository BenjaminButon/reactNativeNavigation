/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/Navigation';

// AppRegistry.registerComponent(appName, () => App);
registerScreens();
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Tab1',
                    options: {
                      topBar: {
                        title: {
                          text: 'Tab 1',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./src/assets/ic_tab_home.png'),
                  text: 'Tab1',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Tab2',
                    options: {
                      topBar: {
                        title: {
                          text: 'Tab 2',
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./src/assets/ic_tab_home.png'),
                  text: 'Tab2',
                },
              },
            },
          },
        ],
      },
    },
  });
});
