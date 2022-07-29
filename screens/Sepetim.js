import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScroller from '../components/Anasayfa/HomeScroller'
import HomeScrollerProduct from '../components/Anasayfa/HomeScrollerProduct'

const Sepetim = () => {

  const phone5 = require("../assets/productImages/phone5.jpg");
  const laptop2 = require("../assets/productImages/laptop2.jpg");
  const lamp2 = require("../assets/productImages/lamp2.jpg");
  const table2 = require("../assets/productImages/table2.jpg");
  const chair1 = require("../assets/productImages/chair1.jpg");
  const vacuum1 = require("../assets/productImages/vacuum1.jpg");

  const offer1 = require("../assets/offers/offer1.jpg");
  const offer2 = require("../assets/offers/offer2.jpg");
  const offer3 = require("../assets/offers/offer3.jpg");

  return (
    <ScrollView contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} style={styles.container}>
      <View style={styles.sepetView}>
        <MaterialCommunityIcon name='cart-outline' size={40} color={"darkgray"}/>
        <Text style={styles.sepetInfo}>Sepetin şu an boş</Text>
        <Text style={styles.sepetRecommend}>
          Sepetini Hepsiorada'nın fırsatlarla dolu dünyasından doldurmak için aşağıdaki ürünleri incelemeye başlayabilirsin.
        </Text>
      </View>
      <HomeScroller
      title="Sana özel öneriler"
      subtitle="Son gezdiklerinden esinlendik">
        <HomeScrollerProduct
        image={phone5}
        price="4.851,00"
        title="Samsung Galaxy A30s 64 GB (Samsung Türkiye Garantili)"/>
        <HomeScrollerProduct
        image={vacuum1}
        price="990,00"
        discountPrice="1.133,10"
        title="Profilo PSU5LU1 Toz Torbalı Süpürge"/>
        <HomeScrollerProduct
        image={table2}
        price="237,92"
        title="Bofigo 60X80 Granit Mermer Desenli Katlanır Masa Balkon Bahçe Kamp Masası Piknik Masası"/>
        <HomeScrollerProduct
        image={laptop2}
        price="9.499,00"
        title='Casper Nirvana S500.1135-8E00T-G-F Intel Core i5 1135G7 8GB 500GB SSD Windows 11 Home 15.6" FHD Taşınabilir Bilgisayar'/>
        <HomeScrollerProduct
        image={lamp2}
        price="352,50"
        title="Modelight Nova 3Lü Planfoyer Avize"/>
        <HomeScrollerProduct
        image={chair1}
        price="297,42"
        title="Bofigo 2 Adet Katlanır Sandalye Kamp Sandalyesi Balkon Sandalyesi Katlanabilir Piknik Ve Bahçe Sandalyesi Lacivert"/>
      </HomeScroller>
      <View style={styles.offersView}>
        <View style={styles.offersTextContainer}>
          <View style={{justifyContent: "center", alignItems: "flex-start", width: "80%",}}>
            <Text style={styles.offersTextTitle}>Kampanyalara göz atın</Text>
          </View>
        </View>
        <ScrollView  
        horizontal 
        style={styles.offersItemScroller}
        contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}}
        showsHorizontalScrollIndicator={false}>
          <View style={styles.offerImageView}>
            <Image source={offer1} resizeMode={"contain"} style={{width: "100%"}}/>
          </View>
          <View style={styles.offerImageView}>
            <Image source={offer2} resizeMode={"contain"} style={{width: "100%"}}/>
          </View>
          <View style={styles.offerImageView}>
            <Image source={offer3} resizeMode={"contain"} style={{width: "100%"}}/>
          </View>
        </ScrollView>
      </View>
      <View style={{height: 200}}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
  sepetView: {
    width: "100%",
    height: 220,
    borderBottomWidth: 1,
    borderRadius: 20,
    borderColor: "lightgray",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sepetInfo: {
    color: "#3a3a3a",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "600"
  },
  sepetRecommend: {
    color: "#3a3a3a",
    textAlign: "center",
    marginTop: 10,
    fontSize: 15
  },
  offersView: {
    width: "100%",
    height: 160,
  },
  offersTextContainer: {
    width: "100%",
    height: 58,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 6,
    paddingHorizontal: 10,

  },
  offersTextTitle: {
    color: "#3a3a3a",
    fontSize: 14,
    fontWeight: "800",
    marginLeft: 6
  },
  offersItemScroller: {
    width: "100%",
    height: 300,
    marginBottom: 6,
    paddingLeft: 6,
    paddingRight: 5,
  },
  offerImageView: {
    marginHorizontal: 5,
    width: 260,
    aspectRatio: 2.9,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
});

export default Sepetim;