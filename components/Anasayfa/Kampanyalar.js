import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Kampanyalar = () => {
  return (
    <View style={styles.kampanyaView}>
      <View style={styles.kampanya}>
        <MaterialCommunityIcon 
          name='diamond-stone' 
          color={"#00c9d4"} 
          size={20} 
          style={{marginLeft: 8, marginRight: 10, backgroundColor: "#e3f7ff", borderRadius: 10}}/>
        <View style={{justifyContent: "center", alignItems: "flex-start"}}>
          <Text style={{color: "#00c9d4", fontWeight: "800", fontSize: 13}}>SANA ÖZEL</Text>
          <Text style={{color: "gray", fontSize: 12}}>5 kampanya var</Text>
        </View>
      </View>
      <View style={styles.kampanya}>
      <MaterialCommunityIcon 
          name='ticket-percent' 
          color={"#00c9d4"} 
          size={20} 
          style={{marginLeft: 8, marginRight: 10, backgroundColor: "#e3f7ff", borderRadius: 10}}/>
        <View style={{justifyContent: "center", alignItems: "flex-start"}}>
          <Text style={{color: "#00c9d4", fontWeight: "800", fontSize: 13}}>4x4 İNDİRİM</Text>
          <Text style={{color: "gray", fontSize: 12}}>8 kampanya var</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  kampanyaView: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  kampanya: {
    width: "46%",
    height: 45,
    marginHorizontal: 6,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#10d8e3",
    borderRadius: 9,
  },
});

export default Kampanyalar;