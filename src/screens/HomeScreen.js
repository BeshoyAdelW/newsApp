import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet, View } from "react-native";
import NewsApi from "../api/news";
import { Icon, List } from "@ui-kitten/components";
import NewsCard from "../components/NewsCard";
import { SearchBar } from "../components/SearchBar";

function HomeScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [dataFromSearch, setDataFromSearch] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const result = await NewsApi.getNews();
      if (result.status == 200) {
        setData(result.data.articles);
      } else {
        console.log(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchNewsSearchResults = async (searchTerm) => {
    try {
      const result = await NewsApi.searchNews(searchTerm);
      if (result.status == 200) {
        setDataFromSearch(result.data.articles);
      } else {
        console.log(result.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      <SearchBar
        style={{ width: "80%", flex: 10 }}
        fetchNewsSearchResults={fetchNewsSearchResults}
      />
      {data && (
        <List
          style={styles.container}
          data={dataFromSearch.length > 0 ? dataFromSearch : data}
          renderItem={({ item }) => <NewsCard item={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
