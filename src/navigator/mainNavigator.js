import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile91228Navigator from '../features/UserProfile91228/navigator';
import Maps91188Navigator from '../features/Maps91188/navigator';
import Add-Item91187Navigator from '../features/Add-Item91187/navigator';
import Maps91183Navigator from '../features/Maps91183/navigator';
import UserProfile91179Navigator from '../features/UserProfile91179/navigator';
import Settings91139Navigator from '../features/Settings91139/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile91228: { screen: UserProfile91228Navigator },
Maps91188: { screen: Maps91188Navigator },
Add-Item91187: { screen: Add-Item91187Navigator },
Maps91183: { screen: Maps91183Navigator },
UserProfile91179: { screen: UserProfile91179Navigator },
Settings91139: { screen: Settings91139Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
