import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or react-native-vector-icons
import data from "../data/data.js";

export default function SearchBar({ onSelect }) {
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (text) => {
    setQuery(text);

    if (text.length > 0) {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredData(results);
    } else {
      setFilteredData([]);
    }
  };

  const handleSelect = (item) => {
    setQuery(item.title);
    setFilteredData([]);
    if (onSelect) onSelect(item);
  };

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      
      {/* Search Container */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#ff5d8f" style={{ marginRight: 8 }} />

        <TextInput
          style={styles.input}
          placeholder="Search for products"
          placeholderTextColor="#b6b6b6"
          value={query}
          onChangeText={handleSearch}
        />
      </View>

      {/* Dropdown results */}
      {filteredData.length > 0 && (
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          style={styles.dropdown}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.option} onPress={() => handleSelect(item)}>
              <Image source={item.image} style={styles.thumbnail} />
              <Text style={styles.optionText}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,

    // Soft shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },

  dropdown: {
    width: "90%",
    backgroundColor: "#fff",
    marginTop: 8,
    borderRadius: 15,
    elevation: 4,
    maxHeight: 250,
    paddingVertical: 8,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },

  thumbnail: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },

  optionText: {
    fontSize: 15,
    color: "#333",
  },
});
