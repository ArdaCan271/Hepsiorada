import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Pressable,
  Image
} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const DetailedProduct = (props) => {

  const blank = require("../assets/productImages/blank.jpg");

  return (
    <Modal visible={props.modalVisible} transparent={true} animationType="fade">
      <Pressable 
      android_disableSound={true}
      onPress={props.onOutsidePress} 
      style={styles.modalOutside}>  
        <MaterialCommunityIcon name='close' size={40} color="white" style={styles.modalClose}/>
        <Pressable style={styles.modal}>
          <View style={styles.productImageView}>
            <Image 
            style={styles.productImage} 
            source={(props.modalInfo === undefined) ? blank : props.modalInfo[0]}
            resizeMode={"contain"}/>
          </View>
          <View style={styles.breakLine}/>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOutside: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"
  },
  modalClose: {
    alignSelf: "flex-end",
    marginRight: 50
  },
  modal: {
    height: "70%",
    width: "75%",
    backgroundColor: "white",
    borderRadius: 13,
    marginBottom: 40,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  productImageView: {
    marginTop: 10,
    width: "100%",
    height: "38%",
    overflow: "hidden",
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  breakLine: {
    width: "95%",
    height: 1,
    backgroundColor: "gray",
  },
});

export default DetailedProduct;