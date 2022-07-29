import React from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


const Suggestion = (props) => {
  return (
    <View style={styles.suggestionContainer}>
      <Pressable unstable_pressDelay={80} android_ripple={{color: "white"}} style={styles.suggestion}>
        <MaterialCommunityIcon name={props.icon} size={55} color={"white"}/>
      </Pressable>
      <Text numberOfLines={2} style={styles.suggestionText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionContainer: {
    width: "24%",
    aspectRatio: 0.91,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  suggestion: {
    width: "75%",
    aspectRatio: 1,
    backgroundColor: "#b8dae6",
    borderRadius: 20,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  suggestionText: {
    color: "#3a3a3a",
    fontSize: 12,
    textAlign: "center",
    fontWeight: "800"
  }
});

export default Suggestion;