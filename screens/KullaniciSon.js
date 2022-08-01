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

const KullaniciSon = ({navigation, route}) => {

  useEffect(() => {
    navigation.setOptions({
      header: () => (<UserHeader nav={navigation}/>),
    });
  }, []);

  const [inputText, setInputText] = useState('');
  const [inputBorderColor, setInputBorderColor] = useState('#darkgray');

  const handleNextPress = () => {
    navigation.pop(4);
  }

  return (
    <View style={styles.container}>
      <View style={{height: "25%", width: "100%", justifyContent: "flex-end", alignItems :"center"}}>
        <View style={styles.userImageView}>
          <MaterialCommunityIcon name='account' size={120} color={"#3a3a3a"}/>
        </View>
      </View>
      <Text numberOfLines={2} style={styles.nameText}>{route.params.isim}</Text>
      <View style={styles.accountInfoView}>
        <View style={{justifyContent: "flex-start", alignItems: "center", flex: 1, paddingTop: 12}}>
          <Text style={{fontSize: 16, color: "#3a3a3a"}}>E-posta:</Text>
          <Text numberOfLines={2} style={{fontSize: 18, color: "#3a3a3a"}}>{route.params.email}</Text>
        </View>
        <View style={{justifyContent: "flex-start", alignItems: "center", flex: 1, paddingTop: 12}}>
          <Text style={{fontSize: 16, color: "#3a3a3a"}}>Şifre:</Text>
          <Text numberOfLines={2} style={{fontSize: 18, color: "#3a3a3a"}}>{route.params.sifre}</Text>
        </View>
      </View>
      <Pressable onPress={handleNextPress} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Hesap Oluştur</Text>
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
  nameText: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: "#3a3a3a",
    width: "50%"
  },
  accountInfoView: {
    width: "80%",
    height: "23%",
    marginTop: 15,
    borderRadius: 15,
    backgroundColor: "#f0f0f0"
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
  },
});

export default KullaniciSon;