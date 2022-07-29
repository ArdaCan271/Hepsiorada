import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScrollerProduct from './HomeScrollerProduct';

const HomeScroller = (props) => {

  return (
    <View style={styles.productsView}>
      <View style={styles.productsTextContainer}>
        <View style={{justifyContent: "center", alignItems: "flex-start", width: "80%",}}>
          <Text style={styles.productsTextTitle}>{props.title}</Text>
          {props.subtitle !== undefined && props.subtitle.length > 1 && <Text style={styles.productsTextSubtitle}>{props.subtitle}</Text>}
        </View>
        {props.showAllButton && <TouchableOpacity touchSoundDisabled style={{width: "20%", flexDirection: "row", justifyContent: "flex-end", alignItems: "center"}}>
          <Text style={{color: "#00c9d4", fontWeight: "500", marginRight: -3}}>Tümü</Text>
          <MaterialCommunityIcon name='chevron-right' color={"#00c9d4"} size={25}/>
        </TouchableOpacity>}
      </View>
      <ScrollView 
      
      horizontal 
      style={styles.productsItemScroller}
      contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}}
      showsHorizontalScrollIndicator={false}>
        {props.children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  productsView: {
    width: "100%",
    height: 350,
  },
  productsTextContainer: {
    width: "100%",
    height: 58,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    paddingHorizontal: 10,

  },
  productsTextTitle: {
    color: "#3a3a3a",
    fontSize: 16,
    fontWeight: "800",
    marginLeft: 6
  },
  productsTextSubtitle: {
    color: "#3a3a3a",
    fontSize: 11,
    marginLeft: 6
  },
  productsItemScroller: {
    width: "100%",
    height: 280,
    marginBottom: 6,
    paddingLeft: 5,
    paddingRight: 5,
  },
});

export default HomeScroller;