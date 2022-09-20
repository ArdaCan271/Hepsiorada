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
import DetailedProduct from '../components/DetailedProduct';

const Anasayfa = ({navigation}) => {

  const onAccountPress = () => {
    navigation.navigate("Kullanıcı")
  }

  useEffect(() => {
    navigation.setOptions({
      header: () => (<DefaultHeader 
        onAccountPress={() => navigation.navigate("Kullanıcı")}/>),
    });
  }, []);

  const [modalOpen, setModalOpen] = useState(false);
  
  const [modalInfo, setModalInfo] = useState()

  const changeModalInfo = () => {
    
  };

  const onProductPress = (data) => {
    //useEffect(() => {
    //  setModalInfo(data)
    //}, [data])
    //console.log(modalInfo);
    setModalOpen(true)
  };

  const onModalOutsidePress = () => {
    setModalOpen(false)
  };



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
  const chair2 = require("../assets/productImages/chair2.jpg");
  const krem1 = require("../assets/productImages/krem1.jpg");
  const krem2 = require("../assets/productImages/krem2.jpg");
  const shoes1 = require("../assets/productImages/shoes1.jpg");
  const kolluk1 = require("../assets/productImages/kolluk1.jpg");
  const elbise1 = require("../assets/productImages/elbise1.jpg");
  const glasses1 = require("../assets/productImages/glasses1.jpg");

  return (
    <ScrollView 
    contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} 
    style={styles.container}
    showsVerticalScrollIndicator={false}>
      <DetailedProduct modalVisible={modalOpen} onOutsidePress={onModalOutsidePress}/>
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
        image={laptop1}
        price="19.500,00"
        discountPrice=""
        title='Acer Nitro 5 AN515-57 Intel Core I7 11800H 16 GB 512 GB SSD RTX 3050TI 4GB Freedos 15.6" Taşınabilir Bilgisayar NH.QESEY.002'
        onPress={onProductPress}/>
        <HomeScrollerProduct
        image={phone1}
        price="5.650,00"
        discountPrice="7.350,00"
        title='Samsung Galaxy M23 5G 128 GB (Samsung Türkiye Garantili)'
        onPress={onProductPress}/>
        <HomeScrollerProduct
        image={headphones1}
        price="721,01"
        title="JBL Tune 510BT Multi Connect Mikrofonlu Kulaküstü Kablosuz Kulaklık Mavi"
        onPress={onProductPress}/>
        <HomeScrollerProduct
        onPress={onProductPress}
        image={airfryer1}
        price="1.499,00"
        discountPrice=""
        title='Kumtel Fastfryer HAF - 01 (Yağsız Fritöz Airfryer)'/>
        <HomeScrollerProduct
        onPress={onProductPress}
        image={table1}
        price="163,90"
        discountPrice="218,60"
        title='Box&Box Küçük Boy Katlanabilir Kumaş Kamp ve Piknik Masası, Siyah, 57 x 43 x 38 cm'/>
        {/* <HomeScrollerProduct
        image={phone2}
        price="9.324,01"
        discountPrice=""
        title='Samsung Galaxy M30s 64 GB (Samsung Türkiye Garantili)'/>
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
        title='Xiaomi Redmi Note 10S 128 GB 6 GB Ram (Xiaomi Türkiye Garantili)'/> */}
      </HomeScroller>
      <Advert image={advert2}/>
      <Advert image={advert4}/>
      <HomeScroller
      title="Tatile çıkacaklara öneriler"
      subtitle="Sezonun favori ürünlerini senin için listeledik">
        <HomeScrollerProduct
        onPress={onProductPress}
        image={krem2}
        price="124,90"
        discountPrice="140,00"
        title="Nivea Sun Koruma&Bronzluk Bronzluk Arttırıcı & Koruyucu Güneş Yağı Gkf 20 200 Ml"/>
        <HomeScrollerProduct
        onPress={onProductPress}
        image={elbise1}
        price="49,90"
        title="Mite Love Pareo Plaj Elbisesi Ponponlu"/>
        <HomeScrollerProduct
        onPress={onProductPress}
        image={glasses1}
        price="49,90"
        title="Modalucci Yeni Sezon Unisex Güneş Gözlüğü"/>
        <HomeScrollerProduct
        onPress={onProductPress}
        image={kolluk1}
        price="289,00"
        title="Bamm Bamm Başlangıç Seviye Yüzme Kolluk Çocuk Kolluk Yüzme Yardımcısı Kolluk Şişme Deniz Havuz Kolluk Simit (S) 1-5 Yaş"/>
        {/* <HomeScrollerProduct
        image={chair2}
        price="436,81"
        title="2 Adet Katlanır Kamp Sandalyesi Piknik Koltuğu Plaj Şezlongu Oval Bardaklıklı"/>
        <HomeScrollerProduct
        image={krem1}
        price="117,22"
        discountPrice="121,50"
        title="Daylong Kids Spf 50 Faktör 150 Ml Çocuk Güneş Kremi"/> */}
        <HomeScrollerProduct
        onPress={onProductPress}
        image={shoes1}
        price="109,00"
        title="Daxtors D079 Günlük Kadın Terlik"/>
      </HomeScroller>
      <Advert image={advert3}/>
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