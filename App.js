import React from 'react';
import {
  View,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Anasayfa from './screens/Anasayfa';
import Sepetim from './screens/Sepetim';
import Kategoriler from './screens/Kategoriler';
import Kullanici from './screens/Kullanici';
import Kullanici2 from './screens/Kullanici2';
import Kullanici3 from './screens/Kullanici3';
import KullaniciSon from './screens/KullaniciSon';

const Tab = createBottomTabNavigator();
      
const TabPages = () => {
  return (
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        
        if (route.name === "Anasayfa") {
          iconName = focused ? "home" : "home-outline";
        } else if (route.name === "Sepetim") {
          iconName = focused ? "cart" : "cart-outline";
        } else if (route.name === "Kullanıcı") {
          iconName = focused ? "person" : "person-outline"
        } else if (route.name === "Kategoriler") {
          iconName = focused ? "grid" : "grid-outline"
        }
        
        return <Icon name={iconName} size={28} color={color}/>
        },
      tabBarActiveTintColor: "#00c9d4",
      tabBarInactiveTintColor: "gray",
      tabBarLabelStyle: {marginTop: -5, marginBottom: 4},
      tabBarStyle: {height: 53},
      tabBarButton: (props) => <Pressable android_disableSound android_ripple={{color: "#c9eaf5", radius: 48}} {...props}/>
      })}>
      <Tab.Screen name="Anasayfa" component={Anasayfa} options={{header: () => (<View/>)}}/>
      <Tab.Screen name='Kategoriler' component={Kategoriler} options={{header: () => (<View/>)}}/>
      <Tab.Screen name="Sepetim" component={Sepetim} options={{header: () => (<View/>)}}/>
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TabPages">
        <Stack.Screen name="TabPages" component={TabPages} options={{headerShown: false}}/>
        <Stack.Screen name="Kullanıcı" component={Kullanici} options={{header: () => (<View/>)}}/>
        <Stack.Screen name="Kullanıcı2" component={Kullanici2} options={{header: () => (<View/>)}}/>
        <Stack.Screen name="Kullanıcı3" component={Kullanici3} options={{header: () => (<View/>)}}/>
        <Stack.Screen name="KullanıcıSon" component={KullaniciSon} options={{header: () => (<View/>)}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
