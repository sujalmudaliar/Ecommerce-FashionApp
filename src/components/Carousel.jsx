import { StyleSheet, View, Image, Dimensions, FlatList } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const { width } = Dimensions.get('window');

const carouselData = [
  {
    id: '1',
    image: require('../assets/yellowWoman.jpg'),
  },
  {
    id: '2',
    image: require('../assets/redWomen.jpg'),
  },
  {
    id: '3',
    image: require('../assets/buisnessWoman.jpg'),
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatListRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
      } else {
        flatListRef.current?.scrollToIndex({
          index: activeIndex + 1,
          animated: true,
        });
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, [activeIndex]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          source={item.image}
          style={styles.carouselImage}
          resizeMode="cover"
        />
      </View>
    );
  };

  const renderDotIndicator = () => {
    return (
      <View style={styles.dotContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === activeIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {renderDotIndicator()}
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 16,
  },
  carouselItem: {
    width: width - 32, // Account for horizontal padding
    height: 180,
    marginHorizontal: 16,
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#eb7474',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
});