import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

const LocationPayBar = ({navigation}) => {

  return (
    <View style={{width: "100%", height: 55, flexDirection: "row", paddingHorizontal: 9, justifyContent: "space-between", marginTop: 5}}>
      <View style={styles.location}>
        <Ionicon name='location-outline' size={32} color={"black"} style={{marginLeft: 5}}/>
        <View style={{marginLeft: 5}}>
          <Text style={{color: "black", fontWeight: "400"}}>Konum</Text>
          <Text style={{color: "black", fontWeight: "600"}}>Dalaman, Muğla</Text>
        </View>
      </View>
      <View style={styles.hepPay}>
        <Fontisto name='pinterest' size={30} color={"#00943b"} style={{marginLeft: 12}}/>
        <View style={{marginLeft: 16}}>
          <Text style={{color: "#00c9d4", fontWeight: "500", fontSize: 12}}>hep<Text style={{color: "#00943b", fontWeight: "500"}}>pay</Text></Text>
          <Text style={{color: "#00943b", fontWeight: "800", fontSize: 17}}>cüzdanım</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  location: {
    width: "61%",
    height: "90%",
    backgroundColor: "#e8e8e8",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  hepPay: {
    width: "37%",
    height: "90%",
    backgroundColor: "#e8e8e8",
    borderRadius: 7,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  }
});

export default LocationPayBar;