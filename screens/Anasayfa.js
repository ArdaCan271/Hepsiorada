import React from 'react';
import {
  FlatList,
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

import { personalProductData, summerProducts } from '../assets/productData/productData';

const advert1 = require("../assets/adverts/advert1.jpg");
const advert2 = require("../assets/adverts/advert2.jpg");
const advert3 = require("../assets/adverts/advert3.jpg");
const advert4 = require("../assets/adverts/advert4.jpg");

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

  useEffect(() => {
    if (modalInfo != undefined){
      setModalOpen(true)
    }
    // console.log(modalInfo)
  }, [modalInfo])

  const onProductPress = (data) => {
    setModalInfo(data)
  };

  const onModalOutsidePress = () => {
    setModalOpen(false)
  };

  const renderItem = ({item}) => (
    <HomeScrollerProduct 
    image={item.image}
    price={item.price}
    discountPrice={item.discountPrice}
    title={item.title}
    onPress={onProductPress}/>
  )

  return (
    <ScrollView 
    contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} 
    style={styles.container}
    showsVerticalScrollIndicator={false}>
      <DetailedProduct modalVisible={modalOpen} onOutsidePress={onModalOutsidePress} modalInfo={modalInfo}/>
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
      showAllButton={true}
      productData={personalProductData}
      renderItem={renderItem}/>
      <Advert image={advert2}/>
      <Advert image={advert4}/>
      <HomeScroller
      title="Tatile çıkacaklara öneriler"
      subtitle="Sezonun favori ürünlerini senin için listeledik"
      productData={summerProducts}
      renderItem={renderItem}/>
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