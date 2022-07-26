import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Anasayfa from './screens/Anasayfa';
import Sepetim from './screens/Sepetim';
import Favorilerim from './screens/Favorilerim';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === "Anasayfa") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Sepetim") {
              iconName = focused ? "cart" : "cart-outline";
            } else if (route.name === "Favorilerim") {
              iconName = focused ? "heart" : "heart-outline"
            }

            return <Icon name={iconName} size={size} color={color}/>
          },
          tabBarActiveTintColor: "#00d6e6",
          tabBarInactiveTintColor: "gray",
        })}>
        <Tab.Screen name="Anasayfa" component={Anasayfa}/>
        <Tab.Screen name="Sepetim" component={Sepetim}/>
        <Tab.Screen name='Favorilerim' component={Favorilerim}/>
      </Tab.Navigator>
    </NavigationContainer>  
  );
};

const styles = StyleSheet.create({});

export default App;
