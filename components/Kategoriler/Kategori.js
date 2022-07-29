import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Kategori = (props) => {

  return (
    <View style={styles.categoryView}>
      <View style={styles.categoryIconView}>
        <MaterialCommunityIcon name={props.icon} size={90} color={"#4b7a79"}/>
      </View>
      <Text
      numberOfLines={2}
      style={styles.categoryText}
      lineBreakMode='middle'>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryView: {
    height: 165, 
    width: "30%", 
    marginLeft: 9,
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 2,
  },
  categoryIconView: {
    width: "95%", 
    aspectRatio: 1, 
    backgroundColor: "white", 
    borderRadius: 14, 
    elevation: 4, 
    justifyContent: "center", 
    alignItems: "center"
  },
  categoryText: {
    color: "#121212", 
    fontSize: 13, 
    fontWeight: "500", 
    marginLeft: 5, 
    marginRight: 5, 
    textAlign: "center", 
    marginTop: 6
  }
});

export default Kategori;