import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import SearchBar from '../components/SearchBar';
import Kategori from '../components/Kategoriler/Kategori';

const Kategoriler = ({navigation}) => {

  return (
    <View style={{flex: 1, width: "100%", height: "100%"}}>
      <View style={{width: "100%", height: "9%", justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5", borderBottomWidth: 1, borderColor: "lightgray"}}>
        <SearchBar/>
      </View>
      <ScrollView 
      contentContainerStyle={{justifyContent: "flex-start", alignItems: "center"}} 
      style={styles.scrollContainer}
      showsVerticalScrollIndicator={false}>
        <View style={{width: "100%", height: 50, justifyContent: "center", alignItems: "flex-start",}}>
          <Text style={{color: "#3a3a3a", marginLeft: 15, fontWeight: "600"}}>Popüler Kategoriler</Text>
        </View>
        <View style={styles.categoriesContainer}>
          <Kategori icon="human-female" title="Kadın Giyim"/>
          <Kategori icon="human-male" title="Erkek Giyim"/>
          <Kategori icon="baby-buggy" title="Bebek Giyim"/>
          <Kategori icon="shoe-heel" title="Ayakkabı"/>
          <Kategori icon="watch" title="Saat"/>
          <Kategori icon="sunglasses" title="Gözlük"/>
          <Kategori icon="sofa-single" title="Mobilya"/>
          <Kategori icon="bed" title="Yatak"/>
          <Kategori icon="outdoor-lamp" title="Aydınlatma"/>
          <Kategori icon="silverware-fork-knife" title="Sofra, Mutfak"/>
          <Kategori icon="vacuum" title="Elektrikli Ev Aletleri"/>
          <Kategori icon="gamepad-variant" title="Oyun Konsolları"/>
          <Kategori icon="book-open-page-variant" title="Kitap"/>
          <Kategori icon="paper-roll" title="Kağıt Ürünleri"/>
          <Kategori icon="food" title="Gıda Ürünleri"/>
          <Kategori icon="hammer-wrench" title="Yapı Market"/>
          <Kategori icon="toothbrush" title="Kişisel Bakım"/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    height: "85%",
    width: "100%",
    backgroundColor: "#f5f5f5",
  },
  categoriesContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "#f5f5f5",
  },
});

export default Kategoriler;