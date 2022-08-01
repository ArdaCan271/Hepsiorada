import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
} from 'react-native';

const UserInput = (props) => {

  return (
    <View style={styles.textInputView}>
      <Text style={styles.inputInfo}>{props.placeholder}</Text>
      <TextInput
      style={[styles.textInput, {borderColor: props.inputBorderColor}]}
      onPressIn={props.onPressIn}
      onEndEditing={props.onEndEditing}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      placeholderTextColor={props.placeholderTextColor}/>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    width: "80%",
    height: 80,
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 25,
  },
  inputInfo: {
    color: "#3a3a3a",
    alignSelf: "flex-start",
    marginLeft: 8,
    fontSize: 16,
    fontWeight: "500"
  },
  textInput: {
    width: "98%",
    height: "55%",
    backgroundColor: "white",
    borderWidth: 1.2,
    borderColor: "darkgray",
    borderRadius: 9,
    color: "black",
    paddingHorizontal: 10,
    fontSize: 18,
  },
});

export default UserInput;