import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

const SearchBar = (props) => {

  return (
  <View style={styles.searchBarView}>
    <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flex: 1, paddingRight: 40}}>
      <Ionicon name='search-outline' size={27} color={"darkgray"} style={{marginLeft: 5}}/>
      <TextInput 
        style={styles.searchBarInput}
        selectionColor={"#00c9d4"}
        placeholder="Ürün, kategori veya marka ara"
        placeholderTextColor={"darkgray"}/>
    </View>
    <Ionicon name='camera' size={27} color={"darkgray"} style={{marginRight: 5}}/>
  </View>
  );
};

const styles = StyleSheet.create({
  searchBarView: {
    flexDirection: "row",
    width: "95%",
    height: 40,
    borderWidth: 1,
    borderColor: "lightgray",
    marginTop: 12,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
    backgroundColor: "white"
  },
  searchBarInput: {
    height: "100%",
    color: "black",
    width: "110%",
    fontSize: 16,
    marginLeft: -30,
    paddingLeft: 38,
  },
});

export default SearchBar;