import { StyleSheet, View, FlatList, StatusBar, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import { ProductAPI } from '../services/productAPI'

const WomensProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await ProductAPI.getProductsByCategory('Womens');
      setProducts(data);
    } catch (error) {
      console.error('Error loading products:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header />
      <LinearGradient
        colors={['#FDF0F3', '#FFFBFC']}
        style={styles.contentContainer}
      >
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#eb7474" />
          </View>
        ) : (
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                imageName={item.imageName}
                title={item.title}
                price={item.price}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={styles.productRow}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.productGrid}
          />
        )}
      </LinearGradient>
    </View>
  )
}

export default WomensProductsScreen

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
  productGrid: {
    padding: 12,
  },
  productRow: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})