import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import TabBar from './components/tab-bar';

import TranslatorView from './views/translator';
import HistoryView from './views/history';
import LoginView from './views/login';
import SigninView from './views/signin';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();


function LoginStack() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Login" component={LoginView} />
            <HomeStack.Screen name="Signin" component={SigninView} />
        </HomeStack.Navigator>
    );
}

function App() {
    return <NavigationContainer>
        <Tab.Navigator initialRouteName="Translate" tabBar={props => <TabBar {...props} />}>
            <Tab.Screen name="Profile" component={LoginStack} />
            <Tab.Screen name="Translate" component={TranslatorView} />
            <Tab.Screen name="History" component={HistoryView} />
        </Tab.Navigator>
    </NavigationContainer>
}

export default App;