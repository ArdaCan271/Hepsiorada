import React from 'react';
import {
  StyleSheet,
  Modal,
  View,
  Pressable,
} from 'react-native';

import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const DetailedProduct = (props) => {

  return (
    <Modal visible={props.modalVisible} transparent={true} animationType="fade">
      <Pressable 
      android_disableSound={true}
      onPress={props.onOutsidePress} 
      style={styles.modalOutside}>  
        <MaterialCommunityIcon name='close' size={40} color="white" style={styles.modalClose}/>
        <Pressable style={styles.modal}>

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
    marginBottom: 40
  }
});

export default DetailedProduct;