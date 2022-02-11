import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '#/screens/LoginScreen';
import UserScreen from '#/screens/UserScreen';
import LogoutScreen from '#/screens/LogoutScreen';
import {useUserContext} from '#/contexts/UserContext';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, Text} from 'react-native';

const AnonymousStackNavigator = createNativeStackNavigator();

function AnonymousStackScreen() {
  return (
    <AnonymousStackNavigator.Navigator>
      <AnonymousStackNavigator.Screen
        name="Anonymous"
        component={LoginScreen}
      />
    </AnonymousStackNavigator.Navigator>
  );
}

const LoggedTabNavigator = createBottomTabNavigator();

function TabScreen() {
  return (
    <LoggedTabNavigator.Navigator>
      <LoggedTabNavigator.Screen name="User" component={UserScreen} />
      <LoggedTabNavigator.Screen name="Logout" component={LogoutScreen} />
    </LoggedTabNavigator.Navigator>
  );
}

function AppStack() {
  const {user, isLoading} = useUserContext();
  if (isLoading) {
    return (
      <SafeAreaView>
        <Text>Cargando...</Text>
      </SafeAreaView>
    );
  }
  return (
    <NavigationContainer>
      {user === null ? <AnonymousStackScreen /> : <TabScreen />}
    </NavigationContainer>
  );
}

export default AppStack;
