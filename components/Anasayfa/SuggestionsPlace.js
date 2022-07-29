import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

const SuggestionsPlace = (props) => {

  return (
    <View style={styles.suggestionsView}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  suggestionsView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
});

export default SuggestionsPlace;