import React from 'react';
import {
  ScrollView,
  StyleSheet,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect, useState } from 'react';

import DefaultHeader from '../components/DefaultHeader';
import LocationPayBar from '../components/Anasayfa/LocationPayBar';
import SearchBar from '../components/SearchBar';
import Suggestion from '../components/Anasayfa/Suggestion';
import Kampanyalar from '../components/Anasayfa/Kampanyalar';
import Advert from '../components/Anasayfa/Advert';
import HomeScroller from '../components/Anasayfa/HomeScroller';
import HomeScrollerProduct from '../components/Anasayfa/HomeScrollerProduct';
import SuggestionsPlace from '../components/Anasayfa/SuggestionsPlace';

const Anasayfa = ({navigation}) => {

  const onAccountPress = () => {
    navigation.navigate("Kullanıcı")
  }

  useEffect(() => {navigation.setOptions({header: () => (<DefaultHeader onAccountPress={}/>),});}, []);

  const advert1 = require("../assets/adverts/advert1.jpg");
  const advert2 = require("../assets/adverts/advert2.jpg");
  const advert3 = require("../assets/adverts/advert3.jpg");
  const advert4 = require("../assets/adverts/advert4.jpg");


  const laptop1 = require("../assets/productImages/laptop1.png");
  const phone1 = require("../assets/productImages/phone1.png");
  const phone2 = require("../assets/productImages/phone2.jpg");
  const phone3 = require("../assets/productImages/phone3.jpg");
  const phone4 = require("../assets/productImages/phone4.jpg");
  const airfryer1 = require("../assets/productImages/airfryer1.jpg");
  const lamp1 = require("../assets/productImages/lamp1.jpg");
  const headphones1 = require("../assets/productImages/headphones1.jpg");
  const table1 = require("../assets/productImages/table1.jpg");

  return (
    <ScrollView 
    contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} 
    style={styles.container}
    showsVerticalScrollIndicator={false}>
      <LocationPayBar/>
      <SearchBar/>
      <SuggestionsPlace>
        <Suggestion icon="basket" title="Market"/>
        <Suggestion icon="crystal-ball" title="Kazandıran Çekiliş"/>
        <Suggestion icon="airplane" title="Uçak Bileti"/>
        <Suggestion icon="water" title="Su"/>
        <Suggestion icon="desktop-tower-monitor" title="Herkese Bilgisayar"/>
        <Suggestion icon="tablet-cellphone" title="Teknoloji Tutkunları"/>
        <Suggestion icon="mother-nurse" title="Anne Çocuk"/>
        <Suggestion icon="diamond-stone" title="Premium'a geç"/>
      </SuggestionsPlace>
      <Kampanyalar/>
      <Advert image={advert1}/>
      <HomeScroller 
      title="Süper Fiyat, Süper Teklif"
      showAllButton={true}>
        <HomeScrollerProduct
        image={phone2}
        price="9.324,01"
        discountPrice=""
        title='Samsung Galaxy M30s 64 GB (Samsung Türkiye Garantili)'/>
        <HomeScrollerProduct
        image={laptop1}
        price="19.500,00"
        discountPrice=""
        title='Acer Nitro 5 AN515-57 Intel Core I7 11800H 16 GB 512 GB SSD RTX 3050TI 4GB Freedos 15.6" Taşınabilir Bilgisayar NH.QESEY.002'/>
        <HomeScrollerProduct
        image={phone1}
        price="5.650,00"
        discountPrice="7.350,00"
        title='Samsung Galaxy M23 5G 128 GB (Samsung Türkiye Garantili)'/>
        <HomeScrollerProduct
        image={airfryer1}
        price="1.499,00"
        discountPrice=""
        title='Kumtel Fastfryer HAF - 01 (Yağsız Fritöz Airfryer)'/>
        <HomeScrollerProduct
        image={table1}
        price="163,90"
        discountPrice="218,60"
        title='Box&Box Küçük Boy Katlanabilir Kumaş Kamp ve Piknik Masası, Siyah, 57 x 43 x 38 cm'/>
        <HomeScrollerProduct
        image={lamp1}
        price="199,90"
        discountPrice=""
        title='Apli̇qa Koza 3Lü Yuvarlak Siyah Avize'/>
        <HomeScrollerProduct
        image={phone3}
        price="4.179,01"
        discountPrice=""
        title='Samsung Galaxy M23 5G 128 GB (Samsung Türkiye Garantili)'/>
        <HomeScrollerProduct
        image={phone4}
        price="5.599,01"
        discountPrice=""
        title='Xiaomi Redmi Note 10S 128 GB 6 GB Ram (Xiaomi Türkiye Garantili)'/>
      </HomeScroller>
      <Advert image={advert2}/>
      <Advert image={advert3}/>
      <Advert image={advert4}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  }
});

export default Anasayfa;