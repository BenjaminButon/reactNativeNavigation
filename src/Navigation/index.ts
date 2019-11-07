import {Navigation} from 'react-native-navigation';
import App from '../../App';
import Tab1 from '../screens/Tab1Screen';
import Tab2 from '../screens/Tab2Screen';
import Tab3 from '../screens/Tab3Screen';
import ProfileScreen from '../screens/ProfileScreen';
import TopBar from '../screens/CustomTopBar';

export const registerScreens = () => {
  Navigation.registerComponent('Landing', () => App);
  Navigation.registerComponent('Tab1', () => Tab1);
  Navigation.registerComponent('Tab2', () => Tab2);
  Navigation.registerComponent('Tab3', () => Tab3);
  Navigation.registerComponent('ProfileScreen', () => ProfileScreen);
  Navigation.registerComponent('TopBar', () => TopBar);
};
