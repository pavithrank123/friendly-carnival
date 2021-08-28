import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppStack from './AppRoute.js';

export default createAppContainer(
    createSwitchNavigator(
      {
        App: AppStack,
      },
      {
        initialRouteName: 'App',
      }
    )
  );