import React from 'react';
import {
  StatusBar,
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