import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import UserInfoContainer from '../Modules/Loans/UserInfoContainer';
import ScreenKeys from './ScreenKeys.js';

const AppRoute = createStackNavigator({
        [ScreenKeys.appRoute.LOAN_DETAILS]: UserInfoContainer,
    },
    {
        headerMode: 'none',
        navigationOptions: {
            gesturesEnabled: false,
        }
    }
);

const AppContainer = createAppContainer(AppRoute);

export default AppContainer;
