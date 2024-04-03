import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, FlatList, StyleSheet, Image } from 'react-native';
import Books from './Book'; // Importing the data from Books.js

export default function Sc1({ navigation }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set the data from Books.js on component mount
    console.log("Books data:", Books); // Log Books data
    setData(Books);
  }, []);

  useEffect(() => {
    console.log("Filtered data:", data); // Log filtered data whenever it changes
  }, [data]);

  const handleSearch = () => {
    // Filter the data based on the search query
    const filteredData = Books.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter by title
      item.author.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by author name
    );
    setData(filteredData);
  };

  const renderImage = ({ item }) => (
    <Image
      style={styles.image}
      source={{ uri: item.coverPhotoUri }}
      resizeMode="cover"
    />
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        onChangeText={text => setSearchQuery(text)}
        value={searchQuery}
        onSubmitEditing={handleSearch}
      />
      
      <FlatList
        data={searchQuery ? data : Books}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.flatListContainer}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.releaseYear}>Author: {item.author.name}</Text>
            {renderImage({ item })}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  searchBar: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemContainer: {
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    width: "100%",
    alignSelf: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  releaseYear: {
    fontSize: 14,
    color: "gray",
  },
  flatListContainer: {
    width: "100%",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
  },
});
