import React from 'react';
import {
  Text,
  View,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DefaultHeader = () => {
  return (
    <View style={{
      height: 55,
      width: "100%",
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      }}>
      <Text style={{
        marginLeft: 20,
        fontSize: 24,
        color: "#00c9d4",
        fontWeight: "bold",
      }}>hepsiorada</Text>
      <View style={{flexDirection: "row"}}>
        <Pressable android_disableSound >
          <Icon name='notifications-outline' size={25} color={"black"} style={{marginRight: 15}}/>
        </Pressable>
        <Pressable android_disableSound >
          <Icon name='person-outline' size={25} color={"black"} style={{marginRight: 15}}/>
        </Pressable>
      </View>
    </View>
  )
};

export default DefaultHeader;