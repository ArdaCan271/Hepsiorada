import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useEffect, useState } from 'react';

import DefaultHeader from '../components/DefaultHeader';

const Anasayfa = ({navigation}) => {

  useEffect(() => {navigation.setOptions({header: () => (<DefaultHeader/>),});}, []);

  return (
    <ScrollView contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} style={styles.container}>
      <View style={{width: "100%", height: 55, flexDirection: "row", paddingHorizontal: 20}}>
        <View style={styles.location}>

        </View>
        <View style={styles.location}>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  location: {
    width: "60%",
    height: "90%",
    backgroundColor: "#e8e8e8",
    borderRadius: 12,
    marginTop: 5,
  },
  text: {
    color: "black",
  }
});

export default Anasayfa;