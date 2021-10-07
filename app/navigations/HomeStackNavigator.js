import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import FacilityUsage from '../screens/FacilityUsage';

const HomeStack = createStackNavigator();

const HomeStackNavigator = function () {
  return (
    <HomeStack.Navigator initialRouteName="HomeStack">
      <HomeStack.Screen
        options={{ headerShown: false }}
        name="HomeStack"
        component={Home}
      />
      <HomeStack.Screen name="Facility Usage" component={FacilityUsage} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;
