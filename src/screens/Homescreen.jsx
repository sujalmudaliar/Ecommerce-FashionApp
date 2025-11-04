import { StyleSheet, Text, View, StatusBar, TextInput, FlatList } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'
import Header from '../components/Header'
import Category from '../components/Category'
import Carousel from '../components/Carousel'
import { useState } from 'react'
import ProductCard from '../components/ProductCard'

const catagories = ['Trending Now', 'New Arrivals', 'Best Sellers', 'Mens', 'Womens', 'Kids', 'Accessories', 'Sale']

const Homescreen = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header />
      <LinearGradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.contentContainer}
      >
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
        <Carousel />
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

        <View style={styles.productsContainer}>
          <FlatList
            data={[
              { id: '1', image: require('../assets/buisnessWoman.jpg'), title: 'Business Attire', price: '$129.99' },
              { id: '2', image: require('../assets/hatWoman.jpg'), title: 'Summer Collection', price: '$89.99' },
              { id: '3', image: require('../assets/redWomen.jpg'), title: 'Evening Wear', price: '$159.99' },
              { id: '4', image: require('../assets/yellowWoman.jpg'), title: 'Casual Style', price: '$79.99' },
              { id: '5', image: require('../assets/youngWoman.jpg'), title: 'Urban Fashion', price: '$99.99' },
              { id: '6', image: require('../assets/womanJersey.jpg'), title: 'Soccer Jersey', price: '$20.5' },
              {}
            ]}
            renderItem={({ item }) => (
              <ProductCard
                image={item.image}
                title={item.title}
                price={item.price}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productGrid}
            ListHeaderComponent={<View style={{ height: 0 }} />}
            ListFooterComponent={<View style={{ height: 20 }} />}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default Homescreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    marginTop: 18,
    marginBottom: 18,
    color: '#222',
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
    marginTop: -8,
  },
  productGrid: {
    paddingHorizontal: 12,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
});