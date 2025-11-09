import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({ item, selectedCategory, setSelectedCategory, navigation }) => {
    const handlePress = () => {
        setSelectedCategory(item);
        // Just update the selected category for now
        // Navigation to specific screens will be added later
    };

    return (
        <TouchableOpacity style={{height:40}} onPress={handlePress}>
            <Text
                style={[
                    styles.categoryText,
                    selectedCategory === item && {
                        color: "#fff",
                        backgroundColor: "#eb7474",
                        elevation: 2,
                        shadowOpacity: 0.1,
                    }
                ]}
            >
                {item}
            </Text>
        </TouchableOpacity>
    )
}

export default Category

const styles = StyleSheet.create({
    categoryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#666',
        backgroundColor: "#f0f0f0",
        paddingHorizontal: 14,
        paddingVertical: 6,
        borderRadius: 16,
        textAlign: 'center',
        marginRight: 8,
        overflow: 'hidden',
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
    }
})