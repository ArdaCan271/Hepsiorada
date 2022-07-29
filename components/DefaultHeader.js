import React from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableOpacity,
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
        <Pressable>
          <View style={{marginRight: 18}}>
            <Text style={{
              color: "white",
              position: "absolute",
              zIndex:2,
              top:-3,
              fontSize: 9,
              right:-3,
              padding:1.9,
              backgroundColor:'#00c9d4',
              borderRadius:10,
              fontWeight: "700"
            }}> 3 </Text>
            <Icon name='notifications-outline' size={25} color={"#3a3a3a"} style={{}}/>
          </View>
        </Pressable>
        <Pressable>
          <Icon name='person-outline' size={25} color={"#3a3a3a"} style={{marginRight: 15}}/>
        </Pressable>
      </View>
    </View>
  )
};

export default DefaultHeader;