import React from 'react';
import { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import UserHeader from '../components/UserHeader/UserHeader';
import UserInput from '../components/UserHeader/UserInput';

const Kullanici2 = ({navigation, route}) => {

  useEffect(() => {
    navigation.setOptions({
      header: () => (<UserHeader nav={navigation}/>),
    });
  }, []);

  const [inputText, setInputText] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState('#darkgray');

  const handleNextPress = () => {
    navigation.navigate("Kullanıcı3", {email: route.params.email, sifre: inputText});
    setInputText("");
  }

  return (
    <View style={styles.container}>
      <View style={{height: "38%", width: "100%", justifyContent: "flex-end", alignItems :"center"}}>
        <View style={styles.userImageView}>
          <MaterialCommunityIcon name='account' size={120} color={"#3a3a3a"}/>
        </View>
      </View>
      <UserInput
      inputBorderColor={inputBorderColor}
      onPressIn={() => {setInputBorderColor('#00c9d4')}}
      onEndEditing={() => {setInputBorderColor('darkgray')}}
      placeholder="Şifreni gir"
      value={inputText}
      onChangeText={setInputText}
      placeholderTextColor={"lightgray"}/>
      <Pressable onPress={handleNextPress} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Sonraki</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  userImageView: {
    width: 150,
    height: 150,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: "#00c9d4",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    elevation: 9
  },
  nextButton: {
    width: "79%",
    height: 60,
    backgroundColor: "#00c9d4",
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginTop: 30
  },
  nextButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  }
});

export default Kullanici2;