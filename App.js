import React from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Anasayfa from './screens/Anasayfa';
import Sepetim from './screens/Sepetim';
import Favorilerim from './screens/Favorilerim';
import Kategoriler from './screens/Kategoriler';

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
            } else if (route.name === "Kategoriler") {
              iconName = focused ? "grid" : "grid-outline"
            }

            return <Icon name={iconName} size={28} color={color}/>
          },
          tabBarActiveTintColor: "#00c9d4",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: {marginTop: -5, marginBottom: 4},
          tabBarStyle: {height: 53},
          tabBarButton: (props) => <Pressable android_disableSound android_ripple={{color: "#c9eaf5"}} {...props}/>
        })}>
        <Tab.Screen name="Anasayfa" component={Anasayfa} options={{header: () => (<View/>)}}/>
        <Tab.Screen name='Kategoriler' component={Kategoriler} options={{header: () => (<View/>)}}/>
        <Tab.Screen name="Sepetim" component={Sepetim} options={{header: () => (<View/>)}}/>
        <Tab.Screen name='Favorilerim' component={Favorilerim} options={{header: () => (<View/>)}}/>
      </Tab.Navigator>
    </NavigationContainer>  
  );
};

const styles = StyleSheet.create({});

export default App;
