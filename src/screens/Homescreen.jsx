import { StyleSheet, Text, View, StatusBar, TextInput, FlatList } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import Category from '../components/Category'
import ProductCard from '../components/ProductCard'
import data from '../data/data'
import { useState } from 'react'


const catagories = ['Trending Now', 'Best Sellers', 'Mens', 'Womens']

const Homescreen = ({ navigation }) => {

  const [products, setProducts] = useState(data);

  const [selectedCategory, setSelectedCategory] = useState("Mens");

  const getFilteredProducts = () => {
    if (selectedCategory === 'Trending Now') {
      return products.filter(item =>
        item.image === require('../assets/linen.jpg') ||
        item.image === require('../assets/bluesaree.jpg') ||
        item.image === require('../assets/denim.jpg') ||
        item.image === require('../assets/red.jpg')
      );
    } else if (selectedCategory === 'Mens') {
      return products.filter(item =>
        item.image === require('../assets/denim.jpg') ||
        item.image === require('../assets/vj.jpg') ||
        item.image === require('../assets/linen.jpg') ||
        item.image === require('../assets/casualman.jpg') ||
        item.image === require('../assets/shirt.jpg') ||
        item.image === require('../assets/hatmen.jpg')
      );
    } else if (selectedCategory === 'Womens') {
      return products.filter(item =>
        item.image !== require('../assets/denim.jpg') &&
        item.image !== require('../assets/vj.jpg') &&
        item.image !== require('../assets/linen.jpg') &&
        item.image !== require('../assets/casualman.jpg') &&
        item.image !== require('../assets/shirt.jpg') &&
        item.image !== require('../assets/hatmen.jpg')
      );
    } else {
      return products; // Best Sellers or default
    }
  };

  // const [likedItems, setLikedItems] = useState(new Array(data.length).fill(false));

  const handleLiked = (item)=>{
    const newProducts= products.map((prod)=>{
      if(prod.id ===item.id){
        return{
          ...prod,
          isLiked:  !prod.isLiked
        }
      }
      return prod;
    })
    setProducts(newProducts);
  }


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    
      <LinearGradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.contentContainer}
        
      >
          <Header />
        
        
       



<FlatList
  numColumns={2}
  ListHeaderComponent={
    <>
    <Text style={styles.title}>Match Your Styles</Text>
      <View style={styles.searchBarWrapper}>
        <View style={styles.inputContainer}>
          <MaterialCommunityIcons name="magnify" size={24} color="#eb7474" />
          <TextInput
            style={styles.input}
            placeholder="Search for products"
            placeholderTextColor="#b0b0b0"
          />
        </View>
      </View>

      <FlatList
        horizontal
        data={catagories}
        renderItem={({ item }) => (
          <Category
            item={item}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
    </>
  }
  data={getFilteredProducts()}
  renderItem={({ item,index }) => <ProductCard item={item} handleLiked={handleLiked} navigation={navigation} />}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom: 100 }}
  keyExtractor={(item, index) => item.id.toString()}
/>
          {/* <View style={{ flexDirection: "row" }}
         >
          <ProductCard />
        <ProductCard />
         </View> */}
        
      </LinearGradient>
    </View>
  );
};

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    minHeight: '100%',
    
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    marginTop: 18,
    marginBottom: 18,
    color: '#000',
    letterSpacing: 0.5,
    alignSelf: 'center',
  },
  searchBarWrapper: {
    alignItems: 'center',
    marginBottom: 18,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 3,
    width: '100%',
    maxWidth: 400,
  },
  input: {
    flex: 1,
    height: 44,
    marginLeft: 8,
    fontSize: 16,
    color: '#222',
    backgroundColor: 'transparent',
  },
  categoryList: {
    paddingHorizontal: 12,
    paddingBottom: 0,
    height: 40,
  },
  productsContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  comingSoon: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  }
});