import React from 'react';
import {
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

const Advert = (props) => {
  return (
    <Pressable style={styles.advertView}>
      <Image 
        source={props.image} 
        resizeMode={"contain"}
        style={{width: "100%"}}/>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  advertView: {
    marginVertical: 8,
    width: "95%",
    aspectRatio: 2.228,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10
  }
});

export default Advert;