import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

const HomeScrollerProduct = (props) => {
  return (
    <View style={styles.productItemView}>
      <View style={styles.productImageView}>
        <Image 
        style={styles.productImage} 
        source={props.image}
        resizeMode={"contain"}/>
      </View>
      <Text numberOfLines={1} style={styles.productPrice}>{props.price} TL</Text>
      <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", flexDirection: "row", marginBottom: 5}}>
        {props.discountPrice !== undefined && props.discountPrice.length > 0 ? <Text numberOfLines={1} style={styles.productDiscountPrice}>{props.discountPrice} TL</Text> : <Text numberOfLines={1} style={styles.productDiscountPrice}></Text>}
        <Text numberOfLines={1} style={{color: "red", fontSize: 14, fontWeight: "500"}}></Text>
      </View>
      <Text numberOfLines={2} style={styles.productTitle}>{props.title}</Text>
      <Pressable style={styles.addProductButton}>
        <Text style={{color: "#121212", fontSize: 12, fontWeight: "500"}}>SEPETE EKLE</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  productItemView:  {
    height: 280, 
    width: 150, 
    marginHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  productImageView: {
    height: 145,
    width: 145,
    alignSelf: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    overflow: "hidden",
    padding: 8,
  },
  productImage: {
    width: "100%",
    height: "100%",
  },
  productPrice: {
    color: "#121212",
    fontWeight: "800",
    marginHorizontal: 8,
    fontSize: 18,
    marginBottom: -3
  },
  productDiscountPrice: {
    textDecorationLine: "line-through",
    color: "gray",
    marginHorizontal: 8,
    fontSize: 15,
  },
  productTitle: {
    color: "#121212",
    marginHorizontal: 8,
    fontSize: 11,
    marginBottom: 4
  },
  addProductButton: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "95%",
    height: 32,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    marginBottom: 3
  }
});

export default HomeScrollerProduct;