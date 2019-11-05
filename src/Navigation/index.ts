import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Tab1 from '../screens/Tab1Screen';
import Tab2 from '../screens/Tab2Screen';

export const registerScreens = () => {
  Navigation.registerComponent('Landing', () => App);
  Navigation.registerComponent('Tab1', () => Tab1);
  Navigation.registerComponent('Tab2', () => Tab2);
};
