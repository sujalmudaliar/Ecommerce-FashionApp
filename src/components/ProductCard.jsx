import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Lucide from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useState } from 'react'

const ProductCard = ({ item, handleLiked, navigation }) => {

    // const isLiked = true;
    // const [isLiked, setIsLiked] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetail', { item })}>
            <Image source={item.image}
                style={styles.coverImage}
                resizeMode="cover" />

            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}> ${item.price} </Text>
            </View>

            <TouchableOpacity onPress={() => {
                handleLiked(item);
            }} style={styles.heartContainer}>
                {item.isLiked ? (
                    <AntDesign name="heart" size={20} color="#eb7474" />
                ) : ( //colored heart
                    <Lucide name="heart" size={20} color="#eb7474" />
                )}
            </TouchableOpacity>

        </TouchableOpacity>
    )
}

export default ProductCard

const styles = StyleSheet.create({
    coverImage: {
        width: "85%",
        height: 256,
        borderRadius: 20,
        marginVertical: 10,
        marginRight: 10,

    },

    container: {
        flex: 1,
        marginTop: 15,
        paddingLeft: 10,
        paddingBottom: 20,
        position: 'relative',
    },

    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#444',
        marginTop: 8,
    },
    price: {
        fontSize: 15,
        color: "#9C9C9C",
        fontWeight: '600'
    },

    content: {
        paddingLeft: 10,
    },

    heartContainer: {
        height: 30,
        width: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        position: 'absolute',
        top: 20,
        right: 30,
    }

})