import React, { useEffect, useState } from "react";
import Constants from "expo-constants";
import { SafeAreaView, StyleSheet } from "react-native";
import NewsApi from "../api/news";
import { List } from "@ui-kitten/components";
import NewsCard from "../components/NewsCard";

function HomeScreen(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchNewsData();
  }, []);

  const fetchNewsData = async () => {
    try {
      const result = await NewsApi.getNews();
      setData(result.data.articles);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.screen}>
      {data && (
        <List
          style={styles.container}
          data={data}
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
