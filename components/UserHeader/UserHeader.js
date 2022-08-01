import React from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const UserHeader = (props) => {
  return (
    <View style={styles.headerView}>
      <Pressable onPress={props.nav.goBack} style={{justifyContent: "center", alignItems: "center", height: 35, width: 35}}>
        <Icon name='chevron-back' size={25} color={"#3a3a3a"}/>
      </Pressable>
      <Text style={styles.headerText}>Hesap oluştur</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  headerView: {
    height: 55,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 10
  },
  headerText: {
    marginLeft: 5,
    fontSize: 20,
    color: "#3a3a3a",
  }
})

export default UserHeader;