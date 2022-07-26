import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';

const Anasayfa = ({navigation}) => {

  useEffect(() => {
    navigation.setOptions({
      header: () => (
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
          }}>hepsiorada</Text>
          <TouchableOpacity>
            <Icon name='person-circle-outline' size={34} color={"black"}/>
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Anasayfa</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  }
});

export default Anasayfa;