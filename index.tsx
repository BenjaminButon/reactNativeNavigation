/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Navigation} from 'react-native-navigation';
import {registerScreens} from './src/Navigation';

// AppRegistry.registerComponent(appName, () => App);
registerScreens();

function pushTabs() {
  Navigation.setDefaultOptions({
    animations: {
      push: {
        enabled: true,
      },
    },
    statusBar: {
      style: 'light',
    },
    topBar: {
      title: {
        component: {
          name: 'TopBar',
        },
      },
    },
    layout: {
      orientation: ['portrait'],
    },
  });

  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            currentTabIndex: 3,
          },
        },
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'tab1',
                    name: 'Tab1',
                    options: {
                      topBar: {
                        background: {color: 'black'},
                        title: {
                          component: {
                            name: 'TopBar',
                          },
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./src/assets/notifications.png'),
                  text: 'Tab1',
                  selectedIconColor: 'orange',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'tab2',
                    name: 'Tab2',
                    options: {
                      topBar: {
                        background: {color: 'black'},
                        title: {
                          component: {
                            name: 'TopBar',
                          },
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
                  selectedIconColor: 'orange',
                },
              },
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    id: 'tab3',
                    name: 'Tab3',
                    options: {
                      topBar: {
                        background: {color: 'black'},
                        title: {
                          component: {
                            name: 'TopBar',
                          },
                        },
                      },
                    },
                  },
                },
              ],
              options: {
                bottomTab: {
                  icon: require('./src/assets/ic_tab_home.png'),
                  text: 'Tab3',
                },
              },
            },
          },
        ],
      },
    },
  });
}
Navigation.events().registerAppLaunchedListener(() => pushTabs());
